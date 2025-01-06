const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.rootNode = null;
  }

  getUnderlyingList() {
    console.log("🚀 ~ Queue ~ getUnderlyingList ~ this.rootNode:", this.rootNode)
    return this.rootNode;
  }

  enqueue(value) {
    const newNode = new ListNode(value);
    let currentNode = this.rootNode;
    if (!currentNode) {
      this.rootNode = newNode;
      return this;
    }
    while (currentNode.next) {
      currentNode = currentNode.next;
    }
    currentNode.next = newNode;
    return this;
  }

  dequeue() {
    const deleteNode = this.rootNode;
    this.rootNode = this.rootNode.next;
    return deleteNode.value;
  }
}

module.exports = {
  Queue
};
