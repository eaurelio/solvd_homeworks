class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null; 
  }

  insert(data) {
    const newNode = new Node(data);
    if (this.head === null) {
      this.head = newNode;
      this.tail = newNode; 
    } else {
      this.tail.next = newNode;
      this.tail = newNode; 
    }
  }

  delete(data) {
    if (this.head === null) {
      throw new Error("List is empty"); 
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      if (this.head === null) {
        this.tail = null; 
      }
      return;
    }
    let current = this.head;
    let prev = null;
    while (current !== null) {
      if (current.data === data) {
        prev.next = current.next;
        if (prev.next === null) {
          this.tail = prev; 
        }
        return;
      }
      prev = current;
      current = current.next;
    }
    throw new Error("Node not found"); 
  }

  search(data) {
    let current = this.head;
    while (current !== null) {
      if (current.data === data) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  printList() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += current.data + " -> ";
      current = current.next;
    }
    result += "null";
    console.log(result);
  }

  getFirst() {
    if (this.head === null) {
      throw new Error("List is empty");
    }
    return this.head.data;
  }

  getLast() {
    if (this.tail === null) {
      throw new Error("List is empty");
    }
    return this.tail.data;
  }
}


const linkedList = new LinkedList();
linkedList.insert(100);
linkedList.insert(200);
linkedList.insert(300);
linkedList.printList(); // expected: 100 -> 200 -> 300 -> null
linkedList.delete(200);
linkedList.printList(); // expected: 100 -> 300 -> null
console.log(linkedList.search(200)); // expected: false
console.log(linkedList.getFirst()); // output: 100
console.log(linkedList.getLast());  // output: 300