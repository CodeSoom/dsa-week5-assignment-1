class DirectedDFS {
  #visited = [];

  constructor(diagraph, startVertex) {
    this.#visited = Array.from({ length: diagraph.sizeOfVertices() }, () => false);
    this.#dfs(diagraph, startVertex);
  }

  #dfs(diagraph, vertex) {
    // 현재 정점을 방문했다고 표시
    this.#visited[vertex] = true;

    // 인접한 정점에서 체크하기
    for (const adjacentVertex of diagraph.adjacencyList(vertex)) {
      // 현재의 인접한 정점에 방문한 적이 없을 경우
      if (!this.#visited[adjacentVertex]) {
        this.#dfs(diagraph, adjacentVertex);
      }
    }
  }

  reachable(vertex) {
    return this.#visited[vertex]; // 방문한 적이 있는 정점이라면 도달 가능한 것.
  }
}

module.exports = {
  DirectedDFS,
};
