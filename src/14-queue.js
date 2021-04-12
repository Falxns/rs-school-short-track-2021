const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.queue = new ListNode();
    this.head = this.queue;
  }

  get size() {
    throw new Error('Not implemented');
  }

  enqueue(element) {
    this.queue.next = new ListNode(element);
    this.queue = this.queue.next;
  }

  dequeue() {
    const buff = this.head.next.value;
    this.head.next = this.head.next.next;
    return buff;
  }
}

module.exports = Queue;
