const { BinarySearchTree, TreeNode } = require('./binary-search-tree.js');
// Before starting, copy and paste your guided practice work into the copy
// of `binary-search-tree.js` in this folder

// Practice problems on binary trees

/**
 * If the left child of the root node is null, then the root node is the minimum value in the tree.
 * Otherwise, the minimum value in the tree is the minimum value in the left subtree
 * @param rootNode - the root node of the tree
 * @returns The minimum value in the BST.
 */
function findMinBST(rootNode) {
  return rootNode.left === null ? rootNode.val : findMinBST(rootNode.left);
}

/**
 * If the right node is null, then the current node is the max value. Otherwise, recursively call the
 * function on the right node.
 * @param rootNode - the root node of the BST
 * @returns The max value of the BST.
 */
function findMaxBST(rootNode) {
  return rootNode.right === null ? rootNode.val : findMaxBST(rootNode.right);
}

/**
 * If the root node is null, return. Otherwise, set the result to the root node's value. Then,
 * recursively call the function on the left and right subtrees, and compare the result to the root
 * node's value
 * @param rootNode - the root node of the binary tree
 * @returns The minimum value in the tree.
 */
function findMinBT(rootNode) {
  if (rootNode == null) return Infinity;

  return Math.min(rootNode.val, findMinBT(rootNode.left), findMinBT(rootNode.right));
}

/**
 * If the root node is null, return negative infinity. Otherwise, return the maximum of the root node's
 * value, the maximum of the left subtree, and the maximum of the right subtree.
 * @param rootNode - the root node of the binary tree
 * @returns The maximum value in the binary tree.
 */
function findMaxBT(rootNode) {
  if (rootNode == null) return -Infinity;

  return Math.max(rootNode.val, findMaxBT(rootNode.left), findMaxBT(rootNode.right));
}

/**
 * "Return the height of the tree rooted at rootNode, or -1 if rootNode is null."
 * 
 * The base case is: if the rootNode is null, we return -1
 * @param rootNode - The root node of the tree.
 * @returns The height of the tree.
 */
function getHeight(rootNode) {
  if (rootNode == null) return -1;

  return Math.max(getHeight(rootNode.left), getHeight(rootNode.right)) + 1;
}

/**
 * If the tree is balanced, then the height of the left and right subtrees can differ by at most 1
 * @param rootNode - the root node of the tree
 * @returns The height of the tree.
 */
function balancedTree(rootNode) {
  if (rootNode == null) return true;

  let left = getHeight(rootNode.left);
  let right = getHeight(rootNode.right);
  return Math.abs(left - right) <= 1 &&
    balancedTree(rootNode.left) == true &&
    balancedTree(rootNode.right) == true;
}

/**
 * "If the root node is null, return 0, otherwise return 1 plus the number of nodes in the left subtree
 * plus the number of nodes in the right subtree."
 * 
 * The above function is a recursive function. It calls itself
 * @param rootNode - the root node of the tree
 * @returns The number of nodes in the tree.
 */
function countNodes(rootNode) {
  if (rootNode == null) return 0;

  return 1 + countNodes(rootNode.left) + countNodes(rootNode.right);
}

/**
 * We recursively traverse the tree until we find the parent node of the target node
 * @param rootNode - the root node of the tree
 * @param target - the value of the node we're looking for
 * @returns The parent node of the target node.
 */
function getParentNode(rootNode, target) {
  // if the target can't be found
  if (rootNode === null) return undefined

  // if the target is the root
  if (rootNode.val === target) return null;

  // if we found the parent
  if (rootNode.left && rootNode.left.val === target ||
    rootNode.right && rootNode.right.val === target) return rootNode;

  // recurse to see if we can find the parent to the left or right
  return getParentNode(rootNode.left, target) ||
    getParentNode(rootNode.right, target);
}

/**
 * If the target is less than or equal to the root node, then the predecessor is in the left subtree.
 * Otherwise, the predecessor is in the right subtree or the root node itself
 * @param rootNode - the root node of the tree
 * @param target - the value of the node we're looking for
 * @returns The inOrderPredecessor function is returning the value of the node that is the in-order
 * predecessor of the target node.
 */
function inOrderPredecessor(rootNode, target) {
  if (rootNode == null) return null;

  // target is to the left
  if (target <= rootNode.val) {
    return inOrderPredecessor(rootNode.left, target);
  }

  // target is to the right or is the root node
  return inOrderPredecessor(rootNode.right, target) || rootNode.val;
}

/**
 * If the node has no children, set the parent's pointer to it to null. If the node has two children,
 * set the node's value to its in-order predecessor, then delete the predecessor. If the node has one
 * child, make the parent point to the child
 * @param rootNode - the root node of the BST
 * @param target - the value of the node to be deleted
 * @returns The root node of the tree.
 */
function deleteNodeBST(rootNode, target) {

  /**
   * We start with a stack containing just the root node, and then we keep popping nodes off the stack
   * and pushing their children onto the stack until we find the target node.
   * @param rootNode - the root node of the tree
   * @param target - the value we're looking for
   * @returns The node with the value of target.
   */
  function findNode(rootNode, target) {
    let found = null;

    // start stack with just rootNode
    let stack = [rootNode];

    while (stack.length > 0) {
      // check the top of the stack
      let top = stack.pop();
      if (top.val === target) {
        found = top;
      }

      // push right onto stack
      if (top.right) { stack.push(top.right); }

      // push left onto stack
      if (top.left) { stack.push(top.left); }
    }

    return found;
  }

  let node = findNode(rootNode, target);
  if (!node) return undefined;

  // Set target based on parent
  let parent = getParentNode(rootNode, target);

  let children = 0;
  if (node.left) { children++; }
  if (node.right) { children++; }

  // Case 0: Zero children and no parent:
  //   return null
  if (!children && !parent) return null;

  // Case 1: Zero children:
  //   set the parent that points to it to null
  if (!children) {
    if (parent.val > node.val) {
      parent.left = null;
    } else {
      parent.right = null;
    }
  }

  // Case 2: Two children:
  //   set the value to its in-order predecessor, then delete the predecessor
  if (children === 2) {

    const predecessor = inOrderPredecessor(rootNode, target);
    node.val = predecessor;

    const parentOfPredecessor = getParentNode(node.left, node.val);

    if (!parentOfPredecessor) node.left = null;
    if (parentOfPredecessor) parentOfPredecessor.right = null;

  }

  // Case 3: One child:
  //   Make the parent point to the child
  if (children === 1) {
    let child = null;

    if (node.left) child = node.left;
    else child = node.right;

    if (parent.val > node.val) parent.left = child;
    else parent.right = child;
  }
}

module.exports = {
  findMinBST,
  findMaxBST,
  findMinBT,
  findMaxBT,
  getHeight,
  countNodes,
  balancedTree,
  getParentNode,
  inOrderPredecessor,
  deleteNodeBST
}