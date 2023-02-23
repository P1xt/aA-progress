// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

/* We're going to create a class that has a root
property, and we're going to create methods that allow us to insert, search, and traverse the tree */
class BinarySearchTree {

  constructor(root = null) {
    this.root = root;
  }

  /**
   * If the value is less than the current node, insert it to the left, otherwise insert it to the
   * right
   * @param val - the value we want to insert into the tree
   * @param [currentNode] - the current node we are on
   * @returns The root node of the tree
   */
  insert(val, currentNode = this.root) {
    const newNode = new TreeNode(val);

    // if the tree is empty
    // insert at the root
    if (this.root === null) {
      this.root = new TreeNode(val);
      return;
    }

    // if val is less than currentNode
    // insert to the left
    if (val < currentNode.val) {
      if (currentNode.left === null) {
        currentNode.left = new TreeNode(val)
      } else {
        this.insert(val, currentNode.left)
      }
      return;
    }

    // else insert to the right
    if (currentNode.right === null) {
      currentNode.right = new TreeNode(val)
    } else {
      this.insert(val, currentNode.right)
    }

  }

  /**
   * If the value is less than the current node's value, recursively search the left subtree. If the
   * value is greater than the current node's value, recursively search the right subtree. If the value
   * is equal to the current node's value, return true
   * @param val - the value we're searching for
   * @param [currentNode] - the node we're currently looking at
   * @returns A boolean value.
   */
  search(val, currentNode = this.root) {

    // if currentNode is null, tree is empty
    if (currentNode === null) return false;

    // if currentNode contains val, val is found
    if (currentNode.val === val) return true;

    // recursively check to the left
    if (val < currentNode.val) {
      return this.search(val, currentNode.left)
    }

    // recursively check to the right
    if (val > currentNode.val) {
      return this.search(val, currentNode.right)
    }
  }


  /**
   * We're going to log the current node, then recursively call the function on the left node, then
   * recursively call the function on the right node
   * @param [currentNode] - the node we're currently on
   */
  preOrderTraversal(currentNode = this.root) {
    // log the current node
    console.log(currentNode.val);

    // recursively print the node to the left
    if (currentNode.left) {
      this.preOrderTraversal(currentNode.left)
    }

    // recursively print the node to the right
    if (currentNode.right) {
      this.preOrderTraversal(currentNode.right)
    }
  }


  /**
   * If there's a left node, print it, then print the current node, then print the right node.
   * @param [currentNode] - the node we're currently on
   * @returns The values of the nodes in the tree in ascending order.
   */
  inOrderTraversal(currentNode = this.root) {
    // bail if we're out of nodes
    if (currentNode === null) {
      return;
    }

    // recursively print the node to the left
    if (currentNode.left) {
      this.inOrderTraversal(currentNode.left)
    }

    // then the current node
    console.log(currentNode.val);

    // then the node to the right
    if (currentNode.right) {
      this.inOrderTraversal(currentNode.right)

    }
  }


  /**
   * We're going to traverse the left side of the tree, then the right side of the tree, and then print
   * the value of the current node
   * @param [currentNode] - the node we're currently on
   * @returns The value of the node.
   */
  postOrderTraversal(currentNode = this.root) {
    if (currentNode === null) return;

    // traverse left
    if (currentNode.left) {
      this.postOrderTraversal(currentNode.left)
    }

    // then right
    if (currentNode.right) {
      this.postOrderTraversal(currentNode.right)
    }

    // then print the current node
    console.log(currentNode.val);
  }

  // Breadth First Traversal - Iterative
  /**
   * We're going to start at the root, and then add the root's left and right children to the queue.
   * Then we're going to remove the first item from the queue, and add its left and right children to
   * the queue. We're going to repeat this process until the queue is empty
   */
  breadthFirstTraversal() {
    const queue = [this.root];
    let branch;

    while (queue.length) {
      branch = queue.shift();
      console.log(branch.val);

      if (branch.left) queue.push(branch.left);
      if (branch.right) queue.push(branch.right);
    }
  }

  // Depth First Traversal - Iterative
  /**
   * We're going to start at the root, and then push the left branch onto the stack, and then the right
   * branch onto the stack, and then pop the right branch off the stack and log it, and then pop the
   * left branch off the stack and log it, and then pop the root off the stack and log it
   */
  depthFirstTraversal() {
    const stack = [this.root];
    let branch;

    while (stack.length) {
      branch = stack.pop();
      console.log(branch.val);

      if (branch.left) stack.push(branch.left);
      if (branch.right) stack.push(branch.right);
    }
  }
}

module.exports = { BinarySearchTree, TreeNode };