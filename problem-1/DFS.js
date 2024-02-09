const { Stack } = require('../data-structure/Stack');

class DFS {
  #visited = [];

  #previousVertexOf = [];

  #startVertex;

  constructor(graph, startVertex) {
    this.#visited = Array.from({ length: graph.sizeOfVertices() }, () => false);
    this.#previousVertexOf = Array.from({ length: graph.sizeOfVertices() }, () => undefined);
    this.#startVertex = startVertex;
    this.#dfs(graph, startVertex);
  }

  #dfs(graph, currentVertex) {
    // 선택한 정점의 방문 여부 체크
    this.#visited[currentVertex] = true;

    for (const adjacentVertex of graph.adjacencyList(currentVertex)) {
      if (!this.#visited[adjacentVertex]) { // 방문한 적 없는 인접 정점일 경우
        this.#previousVertexOf[adjacentVertex] = currentVertex; // currentVertex 로부터 방문했다고 기록한다.
        this.#dfs(graph, adjacentVertex);
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
  DFS,
};
