const { Bag } = require('../data-structure/Bag');

class Diagraph {
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
  Diagraph,
};
