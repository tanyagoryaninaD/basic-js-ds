const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    console.log("🚀 ~ BinarySearchTree ~ add ~ this.rootNode:", this.rootNode)
    return this.rootNode;
  }

  add(data) {
    let newData = new Node(data);

    const searchPlace = node => {
      if (data < node.data) {
        if (!node.left) {
          node.left = newData;
        } else {
          searchPlace(node.left);
        }
      } else if (data > node.data) {
        if (!node.right) {
          node.right = newData;
          return node.right;
        } else {
          searchPlace(node.right);
        }
      }
    }

    if (!this.rootNode) {
      this.rootNode = newData;
    } else {
      searchPlace(this.rootNode);
    }

    return this;
  }

  has(data) {
    let currentNode = this.rootNode;

    while (currentNode) {
      if (data === currentNode.data) {
        return true;
      }
      if (data < currentNode.data) {
        currentNode = currentNode.left;
      } else {
        currentNode = currentNode.right;
      }
    }

    return false;
  }

  find(data) {
    const findNode = node => {
      if (!node) {
        return null;
    }
      if (node.data === data) {
        return node;
      }
      const leftResult = findNode(node.left);
      if (leftResult) {
          return leftResult;
      }
      return findNode(node.right);
    }
    
    return findNode(this.rootNode);
  }

  remove(data) {
    const removeNode = (node, data) => {
      if (!node) {
        return;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        } else if (!node.left) {
          return node.right;
        } else if (!node.right) {
          return node.left;
        } else {
          let minNode = node.right;
          while (minNode.left) {
            minNode = minNode.left;
          }
          node.data = minNode.data;
          node.right = removeNode(node.right, minNode.data);
          return node;
        }
      }
    }
    
    this.rootNode = removeNode(this.rootNode, data);
    return this;
  }

  min() {
    let currentNode = this.rootNode;

    while (currentNode.left) {
      currentNode = currentNode.left;
    }

    if (currentNode) {
      return currentNode.data;
    }
    return null;
  }

  max() {
    let currentNode = this.rootNode;

    while (currentNode.right) {
      currentNode = currentNode.right;
    }

    if (currentNode) {
      return currentNode.data;
    }
    return null;
  }
}

module.exports = {
  BinarySearchTree
};