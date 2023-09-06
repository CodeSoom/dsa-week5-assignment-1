const { Bag } = require('../data-structure/Bag');

class EdgeWeightedGraph {
  #v;

  #e = 0;

  #adj = [];

  constructor(v) {
    this.#v = v;
    for (let i = 0; i < this.#v; i++) {
      this.#adj[i] = new Bag();
    }
  }

  addEdge(edge) {
    const v = edge.either();
    const w = edge.other(v);
    this.#adj[v].add(edge);
    this.#adj[w].add(edge);
    this.#e++;
  }

  edges() {
    const b = new Bag();
    for (let i = 0; i < this.#v; i++) {
      for (const e of this.adj(i)) {
        if (e.other(i) > i) {
          b.add(e);
        }
      }
    }
    return b;
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
  EdgeWeightedGraph,
};
