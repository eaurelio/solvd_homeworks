class Graph {
  constructor() {
    this.vertices = {};
  }

  addVertex(vertex) {
    if (!this.vertices[vertex]) {
      this.vertices[vertex] = [];
    }
  }

  addEdge(vertex1, vertex2, weight) {
    if (!this.vertices[vertex1] || !this.vertices[vertex2]) {
      throw new Error('Both vertices must exist in the graph');
    }
    this.vertices[vertex1].push({ node: vertex2, weight: weight });
    this.vertices[vertex2].push({ node: vertex1, weight: weight });
  }

  bfs(startingVertex) {
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

// Exemplo de uso da classe Graph com BFS e DFS
const graph = new Graph();
graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addVertex("D");
graph.addEdge("A", "B", 1);
graph.addEdge("A", "C", 4);
graph.addEdge("B", "C", 1);
graph.addEdge("B", "D", 2);
graph.addEdge("C", "D", 3);

console.log("BFS a partir do vértice A:");
graph.bfs("A");

console.log("DFS a partir do vértice A:");
graph.dfs("A");

//-----------------------------------------------

class DijkstraShortestPath {
  constructor(graph) {
    this.graph = graph;
  }

  findShortestPath(startingVertex) {
    const distances = {};
    const previous = {};
    const queue = Object.keys(this.graph.vertices).map(vertex => ({ vertex, distance: Infinity }));

    distances[startingVertex] = 0;

    while (queue.length > 0) {
      queue.sort((a, b) => a.distance - b.distance);
      const { vertex } = queue.shift();

      for (const neighbor of this.graph.vertices[vertex]) {
        const alt = distances[vertex] + neighbor.weight;
        if (alt < (distances[neighbor.node] || Infinity)) {
          distances[neighbor.node] = alt;
          previous[neighbor.node] = vertex;
          // Atualiza a distância na fila
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


const dijkstra = new DijkstraShortestPath(graph);
const { distances, previous } = dijkstra.findShortestPath("A");
console.log("Minimum distances:", distances);
console.log("Shortest way:", previous);
