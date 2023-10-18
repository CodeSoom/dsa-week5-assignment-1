const { Bag } = require('../data-structure/Bag');

class Graph {
  // 정점의 개수
  #v;

  // 간선의 개수
  #e;

  #adj = [];

  // v = 정점의 개수
  constructor(v) {
    this.#v = v;
    for (let i = 0; i < this.#v; i++) {
      this.#adj[i] = new Bag();
    }
  }

  addEdge(v, w) {
    this.#adj[v].add(w);
    this.#adj[w].add(v);

    // 간선의 개수 증가
    this.#e++;
  }

  // 정점에 인접한 정점들을 반환
  adj(v) {
    return this.#adj[v];
  }

  // 정점의 개수 반환
  v() {
    return this.#v;
  }

  // 간선의 개수 반환
  e() {
    return this.#e;
  }
}

module.exports = {
  Graph,
};
