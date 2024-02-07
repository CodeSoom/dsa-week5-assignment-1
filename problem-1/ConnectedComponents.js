class ConnectedComponents {
  #visited = [];

  #groupIds = [];

  #groupId = 0;

  constructor(graph) {
    this.#visited = Array.from({ length: graph.sizeOfVertices() }, () => false);
    this.#groupIds = Array.from({ length: graph.sizeOfVertices() }, () => undefined);

    for (let i = 0; i < graph.sizeOfVertices(); i++) {
      if (!this.#visited[i]) {
        this.#dfs(graph, i);
        this.#groupId++;
      }
    }
  }

  #dfs(graph, vertex) {
    this.#visited[vertex] = true;
    this.#groupIds[vertex] = this.#groupId; // 아이디를 기록한다.

    // 인접한 정점을 모두 확인한다.
    for (const adjacentVertex of graph.adjacencyList(vertex)) {
      if (!this.#visited[adjacentVertex]) {
        this.#dfs(graph, adjacentVertex);
      }
    }
  }

  connected(vertex1, vertex2) {
    return this.#groupIds[vertex1] === this.#groupIds[vertex2];
  }
}

module.exports = {
  ConnectedComponents,
};
