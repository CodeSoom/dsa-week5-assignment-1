const { Bag } = require('../data-structure/Bag');

class EdgeWeightedDigraph {
  #v = 0;

  #e = 0;

  #adj = [];

  constructor(v) {
    this.#v = v;
    for (let i = 0; i < this.#v; i++) {
      this.#adj[i] = new Bag();
    }
  }

  addEdge(edge) {
    this.#adj[edge.from()].add(edge);
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
  EdgeWeightedDigraph,
};
