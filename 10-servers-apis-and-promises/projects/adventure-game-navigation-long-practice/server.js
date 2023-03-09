const http = require('http');
const fs = require('fs');

const { Player } = require('./game/class/player');
const { World } = require('./game/class/world');

const worldData = require('./game/data/basic-world-data');

let player;
let world = new World();
world.loadWorld(worldData);

const server = http.createServer((req, res) => {

  /* ============== ASSEMBLE THE REQUEST BODY AS A STRING =============== */
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });

  req.on('end', () => { // After the assembly of the request body is finished
    /* ==================== PARSE THE REQUEST BODY ====================== */
    if (reqBody) {
      req.body = reqBody
        .split("&")
        .map((keyValuePair) => keyValuePair.split("="))
        .map(([key, value]) => [key, value.replace(/\+/g, " ")])
        .map(([key, value]) => [key, decodeURIComponent(value)])
        .reduce((acc, [key, value]) => {
          acc[key] = value;
          return acc;
        }, {});
    }

    /* ======================== ROUTE HANDLERS ========================== */
    // Phase 1: GET /
    if (req.method === 'GET' && req.url === '/') {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      return res.end(
        fs.readFileSync('./views/new-player.html', 'utf-8'
        ).replace(
          /#{availableRooms}/g, world.availableRoomsToString()
        )
      );
    }


    // Phase 2: POST /player
    if (req.method === 'POST' && req.url === '/player') {
      const { name, roomId } = req.body;
      player = new Player(name, world.rooms[roomId]);
      res.statusCode = 302;
      res.setHeader('Location', `/rooms/${roomId}`);
      return res.end();
    }

    // Phase 3: GET /rooms/:roomId
    const configureRoom = () => fs.readFileSync('./views/room.html', 'utf-8')
      .replace(/#{roomName}/g, player.currentRoom.name)
      .replace(/#{roomItems}/g, player.currentRoom.itemsToString())
      .replace(/#{exits}/g, player.currentRoom.exitsToString())
      .replace(/#{inventory}/g, player.inventoryToString());

    if (req.method === "GET" && req.url.startsWith('/rooms/')
      && req.url.split('/').length === 3) {

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      return res.end(configureRoom());
    }

    // Phase 4: GET /rooms/:roomId/:direction
    if (req.method === 'GET' && req.url.startsWith(`/rooms/${player.currentRoom.id}/`)) {
      player.move(req.url.split('/')[3][0]);

      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      return res.end(configureRoom());
    }

    // Phase 5: POST /items/:itemId/:action
    if (req.method === 'POST' && req.url.startsWith('/items/')) {
      const [preface, location, itemId, action] = req.url.split('/');

      if (action === 'take') player.takeItem(itemId);
      if (action === 'drop') player.dropItem(itemId);
      if (action === 'eat') player.eatItem(itemId);

      res.statusCode = 302;
      res.setHeader('Location', `/rooms/${player.currentRoom.id}`);
      return res.end();
    }

    // Phase 6: Redirect if no matching route handlers
    console.log('no matching handler');

    res.statusCode = 302;
    res.setHeader('location', `/rooms/${player.currentRoom.name}`);
    return res.end();
  })
});

const port = 5000;

server.listen(port, () => console.log('Server is listening on port', port));