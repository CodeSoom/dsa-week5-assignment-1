const { Bag } = require('../data-structure/Bag');

class Graph {
  #v;

  #e;

  #adj = [];

  constructor(v) {
    this.#v = v;
    for (let i = 0; i < this.#v; i++) {
      this.#adj[i] = new Bag();
    }
  }

  addEdge(v, w) {
    this.#adj[v].add(w);
    this.#adj[w].add(v);
    this.#e++;
  }

  adj(v) {
    return this.#adj[v];
  }

  v() {
    return this.#v;
  }

  e() {
    return this.#e;
  }
}

module.exports = {
  Graph,
};
