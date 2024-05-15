class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this._head = null;
    this._tail = null;
  }

  enqueue(element) {
    const newNode = new Node(element);
    if (this._tail === null) {
      this._head = newNode;
      this._tail = newNode;
    } else {
      this._tail.next = newNode;
      this._tail = newNode;
    }
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    const data = this._head.data;
    this._head = this._head.next;
    if (this._head === null) {
      this._tail = null;
    }
    return data;
  }

  front() {
    if (this.isEmpty()) {
      throw new Error("Queue is empty");
    }
    return this._head.data;
  }

  isEmpty() {
    return this._head === null;
  }

  printQueue() {
    let output = "";
    let current = this._head;
    while (current !== null) {
      output += current.data + " ";
      current = current.next;
    }
    return output.trim();
  }
}


const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
console.log(queue.printQueue()); // expected: "10 20 30"
console.log(queue.front()); // expected: 10
console.log(queue.dequeue()); // expected: 10
console.log(queue.printQueue()); // expected: "20 30"
