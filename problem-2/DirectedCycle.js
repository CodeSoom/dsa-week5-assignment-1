const { Stack } = require('../data-structure/Stack');

class DirectedCycle {
  #visited = [];

  #previousVertexOf = [];

  #visiting = [];

  #cycle;

  constructor(diagraph) {
    this.#visited = Array.from({ length: diagraph.sizeOfVertices() }, () => false);
    this.#previousVertexOf = Array.from({ length: diagraph.sizeOfVertices() }, () => undefined);
    this.#visiting = Array.from({ length: diagraph.sizeOfVertices() }, () => false);

    for (let vertex = 0; vertex < diagraph.sizeOfVertices(); vertex++) {
      if (!this.#visited[vertex]) {
        this.#dfs(diagraph, vertex);
      }
    }
  }

  #dfs(diagraph, vertex) {
    this.#visited[vertex] = true; // 방문했음을 체크
    this.#visiting[vertex] = true; // 현재 방문 중임을 체크

    // todo : 인접한 정점을 돌면서 순환 경로(cycle)이 있는지 체크하기
    for (const adjacentVertex of diagraph.adjacencyList(vertex)) {
      if (this.hasCycle()) { // 이미 순환경로가 있다면 종료
        return;
      }

      if (!this.#visited[adjacentVertex]) { // 만약 방문한 적 없는 인접 정점이라면
        this.#previousVertexOf[adjacentVertex] = vertex; // 현재 정점에서 방문했다고 기록
        this.#dfs(diagraph, adjacentVertex); // 해당 인접 정점에 인접하는 정점을 돌면서 재귀적으로 실행
      } else if (this.#visiting[adjacentVertex]) {
        // 현재의 인접 정점이 방문도 했고, 현재 방문중인 정점이라면 -> 순환한다는 것
        this.#cycle = new Stack(); // 순환 경로를 기록할 stack 생성

        for (let v = vertex; v !== adjacentVertex; v = this.#previousVertexOf[v]) {
          // 현재 정점이 어디에서부터 왔는지 거슬러 올라가면서 순환 경로 스택에 추가한다.
          this.#cycle.push(v);
        }

        // 목적지와 출발지 담기
        this.#cycle.push(adjacentVertex);
        this.#cycle.push(vertex);
      }
    }

    this.#visiting[vertex] = false;
  }

  hasCycle() {
    return !!this.#cycle;
  }

  cycle() {
    return this.#cycle;
  }
}

module.exports = {
  DirectedCycle,
};
