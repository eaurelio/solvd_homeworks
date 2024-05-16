class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    // Method to insert a new node into the binary tree.
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    // Recursive method to insert a new node into the binary tree.
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      // Duplicated items will be inserted on the right side.
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  search(node, data) {
    if (node === null) {
      return false;
    } else if (data < node.data) {
      return this.search(node.left, data);
    } else if (data > node.data) {
      return this.search(node.right, data);
    } else {
      return true;
    }
  }

  inOrder(node) {
    if (node !== null) {
      this.inOrder(node.left);
      console.log(node.data);
      this.inOrder(node.right);
    }
  }

  preOrder(node) {
    if (node !== null) {
      console.log(node.data);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
  }

  postOrder(node) {
    if (node !== null) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      console.log(node.data);
    }
  }
}

// Create an instance of BinaryTree and perform traversals and search operations.
const bt = new BinaryTree();
bt.insert(8);
bt.insert(3);
bt.insert(10);
bt.insert(1);
bt.insert(6);
bt.insert(14);
bt.insert(4);
bt.insert(7);
bt.insert(13);

console.log('In-Order Traversal:');
bt.inOrder(bt.root);

console.log('Pre-Order Traversal:');
bt.preOrder(bt.root);

console.log('Post-Order Traversal:');
bt.postOrder(bt.root);

console.log('Searching value 10:', bt.search(bt.root, 10)); // expected true
console.log('Searching value 2:', bt.search(bt.root, 2)); // expected false


//-----------------------------------------

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    // Method to insert a new node into the binary search tree.
    const newNode = new Node(data);
    if (this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    // Recursive method to insert a new node into the binary search tree.
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  isBST(node, min = null, max = null) {
    // Method to check if the binary search tree satisfies the BST property.
    if (node === null) {
      return true;
    }
    if ((min !== null && node.data <= min) || (max !== null && node.data >= max)) {
      return false;
    }
    return this.isBST(node.left, min, node.data) && this.isBST(node.right, node.data, max);
  }

  isBinarySearchTree() {
    return this.isBST(this.root);
  }
}

// Create an instance of BinarySearchTree and check if it is a BST.
const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
bst.insert(6);
bst.insert(1);
bst.insert(3);
bst.insert(5);
bst.insert(7);
console.log(bst.isBinarySearchTree()); // expected: true
