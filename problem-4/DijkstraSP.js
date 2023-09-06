const { IndexedPQ } = require('../data-structure/IndexedPQ');
const { Stack } = require('../data-structure/Stack');

class DijkstraSP {
  #edgeTo = [];

  #distTo = [];

  #graph;

  #pq;

  #s;

  constructor(graph, s) {
    this.#graph = graph;
    this.#pq = new IndexedPQ(graph.v());
    this.#s = s;

    for (let v = 0; v < graph.v(); v++) {
      this.#distTo[v] = Infinity;
    }
  }

  search() {
  }

  #relax() {
  }

  distTo(v) {
    return this.#distTo[v];
  }

  hasPathTo(v) {
    return this.#distTo[v] < Infinity;
  }

  pathTo(v) {
    if (!this.hasPathTo(v)) {
      return;
    }

    const path = new Stack();

    for (let e = this.#edgeTo[v]; e !== undefined; e = this.#edgeTo[e.from()]) {
      path.push(e);
    }

    return path;
  }
}

module.exports = {
  DijkstraSP,
};
