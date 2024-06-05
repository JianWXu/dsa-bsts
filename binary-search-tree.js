class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }
    let curr = this.root;
    while (true) {
      if (val < curr.val) {
        if (curr.left === null) {
          curr.left = new Node(val);
          return this;
        } else {
          curr = curr.left;
        }
      } else if (val > curr.val) {
        if (curr.right === null) {
          curr.right = new Node(val);
          return this;
        } else {
          curr = curr.right;
        }
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, curr = this.root) {
    if (this.root === null) {
      this.root = new Node(val);
      return this;
    }

    if (val < curr.val) {
      if (curr.left === null) {
        curr.left = new Node(val);
      } else {
        this.insertRecursively(val, curr.left);
      }
    } else if (val > curr.val) {
      if (curr.right === null) {
        curr.right = new Node(val);
      } else {
        this.insertRecursively(val, curr.right);
      }
    }
    return this.insertRecursively(val, curr.right);
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let curr = this.root;

    while (curr !== null) {
      if (curr.val === val) {
        return curr;
      } else if (curr.val < val) {
        curr = curr.right;
      } else {
        curr = curr.left;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, curr = this.root) {
    if (curr === null) {
      return undefined;
    }
    if (curr.val === val) {
      return curr;
    }
    if (curr.val < val) {
      return this.findRecursively(val, curr.right);
    }
    return this.findRecursively(val, curr.left);
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder() {
    let stack = [this.root];
    let visitedArr = [];

    while (stack.length > 0) {
      let node = stack.pop();
      if (node) {
        visitedArr.push(node.val);
        if (node.right) stack.push(node.right);
        if (node.left) stack.push(node.left);
      }
    }
    return visitedArr;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder() {
    let stack = [];
    let visitedArr = [];
    let curr = this.root;

    while (stack.length > 0) {
      while (curr) {
        stack.push(curr);
        curr = curr.left;
      }
      curr = stack.pop();
      visitedArr.push(curr.val);
      curr = curr.right;
    }
    return visitedArr;
  }

  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder() {
    if (!this.root) return [];

    let stack1 = [this.root];
    let stack2 = [];
    let visitedArr = [];

    while (stack1.length > 0) {
      let node = stack1.pop();
      stack2.push(node);

      if (node.left) stack1.push(node.left);
      if (node.right) stack1.push(node.right);
    }

    while (stack2.length > 0) {
      let node = stack2.pop();
      visitedArr.push(node.val);
    }

    return visitedArr;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    let visitedArr = [];
    let queue = [this.root];

    while (queue.length > 0) {
      let node = queue.shift();
      if (node) {
        visitedArr.push();
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
      }
    }
    return visitedArr;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {}

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {}

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {}
}

module.exports = BinarySearchTree;
