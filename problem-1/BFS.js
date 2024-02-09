const { Queue } = require('../data-structure/Queue');
const { Stack } = require('../data-structure/Stack');

class BFS {
  #visited = [];

  #previousVertexOf = [];

  #startVertex;

  constructor(graph, startVertex) {
    this.#visited = Array.from({ length: graph.sizeOfVertices() }, () => false);
    this.#previousVertexOf = Array.from({ length: graph.sizeOfVertices() }, () => undefined);
    this.#startVertex = startVertex;
    this.#bfs(graph, startVertex);
  }

  #bfs(graph, startVertex) {
    const queue = new Queue();

    this.#visited[startVertex] = true;
    queue.enqueue(startVertex);

    while (!queue.isEmpty()) {
      const currentVertex = queue.dequeue();

      for (const adjacentVertex of graph.adjacencyList(currentVertex)) {
        if (!this.#visited[adjacentVertex]) {
          this.#previousVertexOf[adjacentVertex] = currentVertex;
          this.#visited[adjacentVertex] = true;
          queue.enqueue(adjacentVertex);
        }
      }
    }
  }

  // 해당 정점이 연결되어 있는지 안 되어 있는지 반환한다.
  hasPathTo(vertex) {
    return this.#visited[vertex];
  }

  pathTo(vertex) {
    // 해당 정점에 연결된 정점이 없다 = 해당 정점으로 갈 경로가 없다.
    if (!this.hasPathTo(vertex)) {
      return;
    }

    const pathToVertex = new Stack();
    for (let item = vertex; item !== this.#startVertex; item = this.#previousVertexOf[item]) {
      pathToVertex.push(item);
    }

    pathToVertex.push(this.#startVertex);

    return pathToVertex;
  }
}

module.exports = {
  BFS,
};
