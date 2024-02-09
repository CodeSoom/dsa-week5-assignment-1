const { Bag } = require('../data-structure/Bag');

class Diagraph {
  #numberOfVertices;

  #numberOfEdges;

  #adjacencyList = [];

  constructor(numberOfVertices) {
    this.#numberOfVertices = numberOfVertices;
    for (let i = 0; i < this.#numberOfVertices; i++) {
      this.#adjacencyList[i] = new Bag();
    }
  }

  addEdge(source, destination) {
    this.#adjacencyList[source].add(destination);
    this.#numberOfEdges++;
  }

  adjacencyList(vertex) {
    return this.#adjacencyList[vertex];
  }

  sizeOfVertices() {
    return this.#numberOfVertices;
  }

  sizeOfEdges() {
    return this.#numberOfEdges;
  }
}

module.exports = {
  Diagraph,
};
