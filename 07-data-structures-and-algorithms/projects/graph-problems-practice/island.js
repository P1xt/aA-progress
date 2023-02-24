/**
 * It returns an array of all the neighbors of a given node in a graph
 * @param row - The row of the current node
 * @param col - The column of the current node
 * @param graph - The graph we're searching.
 * @returns The neighbors of the current node.
 */
function getNeighbors(row, col, graph) {
  let neighbors = []

  // Check top 
  if (row > 0 && graph[row - 1][col])
    neighbors.push([row - 1, col]);
  // Check bottom
  if (row < graph.length - 1 && graph[row + 1][col])
    neighbors.push([row + 1, col]);
  // Check left
  if (col > 0 && graph[row][col - 1])
    neighbors.push([row, col - 1]);
  // Check right
  if (col < graph[0].length - 1 && graph[row][col + 1])
    neighbors.push([row, col + 1])

  // Return neighbors
  return neighbors;
}


/**
 * We start at a node, and increment the size by 1. Then we push all the unvisited neighbors on top of
 * the stack, and mark them as visited
 * @param row - the row of the starting node
 * @param col - the column of the starting node
 * @param graph - a 2D array of 1s and 0s
 * @returns The size of the island.
 */
function islandSize(row, col, graph) {
  // Create a visited set to store visited nodes
  let visited = new Set();
  // Create a stack, put the starting node in the stack
  let stack = [[row, col]];

  // Put the stringified starting node in visited
  visited.add(`${row}, ${col}`)
  // Initialize size to 0
  let size = 0;

  // While the stack is not empty,
  while (stack.length > 0) {
    // Pop the first node
    const node = stack.pop();

    // DO THE THING (increment size by 1)
    size++
    // Then push all the UNVISITED neighbors on top of the stack
    const [row, col] = node;
    const neighbors = getNeighbors(row, col, graph);
    for (const neighbor of neighbors) {
      const [row, col] = neighbor;

      if (!visited.has(`${row}, ${col}`)) {
        stack.push(neighbor);
        // and mark them as visited
        visited.add(`${row}, ${col}`)
      };
    };
  }
  // return size
  return size;
}

module.exports = [getNeighbors, islandSize];