const { Stack } = require('../data-structure/Stack');

class DFS {
  #marked = [];

  #edgeTo = [];

  #s;

  constructor(graph, s) {
    // 정점 방문 여부
    this.#marked = Array.from({ length: graph.v() }, () => false);

    // 이전 경로
    this.#edgeTo = Array.from({ length: graph.v() }, () => undefined);

    // 시작점
    this.#s = s;
    this.#dfs(graph, s);
  }

  #dfs(graph, v) {
    this.#marked[v] = true;

    for (const w of graph.adj(v)) {
      if (!this.#marked[w]) {
        this.#edgeTo[w] = v;
        this.#dfs(graph, w);
      }
    }
  }

  hasPathTo(v) {
    // DFS는 모든 정점을 방문하기 때문에 연결되어 있다면
    // #marked[v]가 true일 수 밖에 없다.
    return this.#marked[v];
  }

  pathTo(v) {
    if (!this.hasPathTo(v)) {
      return;
    }

    const path = new Stack();

    for (let i = v; i !== this.#s; i = this.#edgeTo[i]) {
      path.push(i);
    }

    path.push(this.#s);

    return path;
  }
}

module.exports = {
  DFS,
};
