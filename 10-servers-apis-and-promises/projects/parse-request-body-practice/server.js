const { sendFormPage } = require("./routes");
const { parseBody } = require("./parse-body");
let server;

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE ABOVE THIS LINE *******************/

// Your code here
const http = require('http');
server = http.createServer((req, res) => {
  let reqBody = '';
  req.on('data', (data) => {
    reqBody += data;
  });
  req.on('end', () => {
    if (reqBody) {
      let parsed = parseBody(reqBody);
      req.body = parsed;
    }
    sendFormPage(req, res);
  });
});

/******************************************************************************/
/******************* DO NOT CHANGE THE CODE BELOW THIS LINE *******************/

module.exports = { server };