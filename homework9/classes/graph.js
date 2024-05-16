class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    // Adding a new vertex to graph
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    // Adding a new edge between two vertices, including weight
    if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
      throw new Error('Both vertices must exist in the graph');
    }
    this.vertices[vertex1].push({ node: vertex2, weight: weight });
    this.vertices[vertex2].push({ node: vertex1, weight: weight });
  }

  bfs(startingVertex) {
    // Perform a brandwith search starting from an initial vertex
    const visited = {};
    const queue = [startingVertex];
    visited[startingVertex] = true;

    while (queue.length > 0) {
      const vertex = queue.shift();
      console.log(vertex);
      for (const neighbor of this.vertices[vertex]) {
        if (!visited[neighbor.node]) {
          visited[neighbor.node] = true;
          queue.push(neighbor.node);
        }
      }
    }
  }

  dfs(startingVertex) {
    // Perform a depth search starting from an initial vertex
    const visited = {};
    this.dfsRecursive(startingVertex, visited);
  }

  dfsRecursive(vertex, visited) {
    visited[vertex] = true;
    console.log(vertex);
    for (const neighbor of this.vertices[vertex]) {
      if (!visited[neighbor.node]) {
        this.dfsRecursive(neighbor.node, visited);
      }
    }
  }
}

// Creating an instance of Graph
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addVertex("E");
graph.addVertex("F");
graph.addVertex("G");
graph.addVertex("H");
graph.addVertex("I");
graph.addVertex("J");
graph.addEdge("A", "B", 1);
graph.addEdge("A", "C", 1);
graph.addEdge("A", "D", 1);
graph.addEdge("B", "E", 1);
graph.addEdge("C", "F", 1);
graph.addEdge("D", "G", 1);
graph.addEdge("E", "H", 1);
graph.addEdge("F", "I", 1);
graph.addEdge("G", "J", 1);

console.log("BFS starting from the vertex A:");
graph.bfs("A");

console.log("DFS starting from the vertex A:");
graph.dfs("A");


//-----------------------------------------------

class DijkstraShortestPath {
  constructor(graph) {
    this.graph = graph;
  }

  findShortestPath(startingVertex) {
    const distances = {};
    const previous = {};

    // Initialize a priority queue with all vertices of the graph.
    const queue = Object.keys(this.graph.vertices).map(vertex => ({ vertex, distance: Infinity }));

    distances[startingVertex] = 0;

    // Dijkstra's algorithm to find shortest paths.
    while (queue.length > 0) {
      // Sort the queue based on distances.
      queue.sort((a, b) => a.distance - b.distance);
      // Remove the vertex with the smallest distance from the queue.
      const { vertex } = queue.shift();

      // Traverse the neighbors of the removed vertex.
      for (const neighbor of this.graph.vertices[vertex]) {
        // Calculate the alternative distance to the neighbor.
        const alt = distances[vertex] + neighbor.weight;
        // If the alternative distance is less than the current distance, update the data structures.
        if (alt < (distances[neighbor.node] || Infinity)) {
          distances[neighbor.node] = alt;
          previous[neighbor.node] = vertex;
          // Update the distance in the priority queue.
          const neighborQueueIndex = queue.findIndex(item => item.vertex === neighbor.node);
          if (neighborQueueIndex > -1) {
            queue[neighborQueueIndex].distance = alt;
          }
        }
      }
    }
    
    return { distances, previous };
  }
}

// Creating an instance of Dijkstra algorithm 
const dijkstra = new DijkstraShortestPath(graph);
const { distances, previous } = dijkstra.findShortestPath("A");
console.log("Minimum distances:", distances);
console.log("Shortest way:", previous);
