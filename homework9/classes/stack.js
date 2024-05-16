class Stack {
  constructor() {
    this._items = [];
  }

  push(element) {
    this._items.push(element);
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error("Underflow");
    }
    return this._items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      throw new Error("Stack is empty");
    }
    return this._items[this._items.length - 1];
  }

  isEmpty() {
    return this._items.length === 0;
  }

  printStack() {
    return this._items.join(" ");
  }
}

// Creating an instance of Stack
const stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack()); // expected: "10 20 30"
console.log(stack.peek()); // expected: 30
console.log(stack.pop()); // expected: 30
console.log(stack.printStack()); // expected: "10 20"

//--------------------------

class MinMaxStack {
  constructor() {
    this.stack = [];
    this.minStack = [];
    this.maxStack = [];
  }

  push(value) {
    this.stack.push(value);
    if (this.minStack.length === 0 || value <= this.minStack[this.minStack.length - 1]) {
      this.minStack.push(value);
    }
    if (this.maxStack.length === 0 || value >= this.maxStack[this.maxStack.length - 1]) {
      this.maxStack.push(value);
    }
  }

  pop() {
    const value = this.stack.pop();
    if (value === this.minStack[this.minStack.length - 1]) {
      this.minStack.pop();
    }
    if (value === this.maxStack[this.maxStack.length - 1]) {
      this.maxStack.pop();
    }
    return value;
  }

  getMin() {
    if (this.minStack.length === 0) {
      return "Stack is empty";
    }
    return this.minStack[this.minStack.length - 1];
  }

  getMax() {
    if (this.maxStack.length === 0) {
      return "Stack is empty";
    }
    return this.maxStack[this.maxStack.length - 1];
  }
}

// Creating an instance of MinMaxStack
const minStack = new MinMaxStack();
minStack.push(3);
minStack.push(5);
minStack.push(2);
minStack.push(7);
console.log(minStack.getMin()); // expected: 2
console.log(minStack.getMax()); // expected: 7
minStack.pop();
console.log(minStack.getMin()); // expected: 2
console.log(minStack.getMax()); // expected: 5