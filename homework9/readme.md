# JavaScript Data Structures and Algorithms

This document covers essential data structures and algorithms implemented in JavaScript. It introduces various structures such as [Stack](#stack),&nbsp;[MinMaxStack](#minmaxstack),&nbsp;[Queue](#queue),&nbsp;[Graph](#graph),&nbsp;[DijkstraShortestPath](#dijkstrashortestpath),&nbsp;[BinaryTree](#binarytree),&nbsp;[BinarySearchTree](#binarysearchtree),&nbsp;and [LinkedList](#linkedlist), along with usage examples. From basic concepts like stacks and queues to more complex ones like graphs and trees, it serves as a comprehensive reference for developers looking to implement these structures in JavaScript projects. Whether you're a beginner learning about data structures or an experienced developer, this document offers clear explanations and practical examples.

## Stack

The `Stack` class represents a last-in-first-out (LIFO) data structure. It supports the following operations:

- `push(element)`: Adds an element to the top of the stack.
- `pop()`: Removes and returns the element from the top of the stack.
- `peek()`: Returns the element at the top of the stack without removing it.
- `isEmpty()`: Returns true if the stack is empty, otherwise false.
- `printStack()`: Returns a string representation of the stack.

```javascript
// Example of using the Stack class
const stack = new Stack();
stack.push(10);
stack.push(20);
console.log(stack.peek()); // Output: 20
console.log(stack.pop()); // Output: 20
console.log(stack.isEmpty()); // Output: false
console.log(stack.printStack()); // Output: "10"
```

## MinMaxStack

The `MinMaxStack` class is an extension of the `Stack` class that also keeps track of the minimum and maximum elements in the stack. It provides the following additional methods:

- `getMin()`: Returns the minimum element in the stack.
- `getMax()`: Returns the maximum element in the stack.

```javascript
// Example of using the MinMaxStack class
const minMaxStack = new MinMaxStack();
minMaxStack.push(3);
minMaxStack.push(5);
console.log(minMaxStack.getMin()); // Output: 3
console.log(minMaxStack.getMax()); // Output: 5
```

## Node

The `Node` class represents a single node in a data structure, such as a linked list or a tree. It contains a `data` property to store the node's data and a `next` property to reference the next node in the sequence.

## Queue

The `Queue` class represents a first-in-first-out (FIFO) data structure. It supports the following operations:

- `enqueue(element)`: Adds an element to the back of the queue.
- `dequeue()`: Removes and returns the element from the front of the queue.
- `front()`: Returns the element at the front of the queue without removing it.
- `isEmpty()`: Returns true if the queue is empty, otherwise false.
- `printQueue()`: Returns a string representation of the queue.

```javascript
// Example of using the Queue class
const queue = new Queue();
queue.enqueue(10);
queue.enqueue(20);
console.log(queue.front()); // Output: 10
console.log(queue.dequeue()); // Output: 10
console.log(queue.isEmpty()); // Output: false
```

## Graph

The `Graph` class represents a graph data structure using an adjacency list. It supports the following operations:

- `addVertex(vertex)`: Adds a vertex to the graph.
- `addEdge(vertex1, vertex2, weight)`: Adds an edge between two vertices with an optional weight.
- `bfs(startingVertex)`: Performs a breadth-first search starting from a given vertex.
- `dfs(startingVertex)`: Performs a depth-first search starting from a given vertex.

```javascript
// Example of using the Graph class
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addEdge("A", "B", 1);
console.log(graph.bfs("A")); // Output: A, B
```

## DijkstraShortestPath

The `DijkstraShortestPath` class implements Dijkstra's algorithm to find the shortest paths in a graph. It provides the following method:

- `findShortestPath(startingVertex)`: Finds the shortest paths from a given starting vertex to all other vertices in the graph.

```javascript
// Example of using the DijkstraShortestPath class
const dijkstra = new DijkstraShortestPath(graph);
const { distances, previous } = dijkstra.findShortestPath("A");
console.log("Minimum distances:", distances);
console.log("Shortest way:", previous);
```

## BinaryTree

The `BinaryTree` class represents a binary tree data structure. It supports insertion and three types of tree traversal:

- `insert(data)`: Inserts a new node into the binary tree.
- `inOrder(node)`: Performs an in-order traversal of the binary tree.
- `preOrder(node)`: Performs a pre-order traversal of the binary tree.
- `postOrder(node)`: Performs a post-order traversal of the binary tree.
- `search(node, data)`: Searches for a node with the specified data in the binary tree.

```javascript
// Example of using the BinaryTree class
const bt = new BinaryTree();
bt.insert(8);
bt.insert(3);
console.log(bt.search(bt.root, 3)); // Output: true
```

## BinarySearchTree

The `BinarySearchTree` class represents a binary search tree data structure. It extends the `BinaryTree` class and provides additional methods to maintain the binary search tree property:

- `isBinarySearchTree()`: Checks whether the binary tree satisfies the binary search tree property.

```javascript
// Example of using the BinarySearchTree class
const bst = new BinarySearchTree();
bst.insert(4);
bst.insert(2);
console.log(bst.isBinarySearchTree()); // Output: true
```

## LinkedList

The `LinkedList` class represents a singly linked list data structure. It supports the following operations:

- `insert(data)`: Inserts a new node at the end of the linked list.
- `delete(data)`: Deletes a node with the specified data from the linked list.
- `search(data)`: Searches for a node with the specified data in the linked list.
- `printList()`: Prints the elements of the linked list.
- `getFirst()`: Returns the data of the first node in the linked list.
- `getLast()`: Returns the data of the last node in the linked list.

```javascript
// Example of using the LinkedList class
const linkedList = new LinkedList();
linkedList.insert(100);
linkedList.insert(200);
console.log(linkedList.search(200)); // Output: true
```
