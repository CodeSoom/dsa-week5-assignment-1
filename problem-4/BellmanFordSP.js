const { Queue } = require('../data-structure/Queue');
const { Stack } = require('../data-structure/Stack');

class BellmanFordSP {
  #edgeTo = [];

  #distTo = [];

  #onQ = [];

  #queue;

  #graph;

  #s;

  constructor(graph, s) {
    this.#graph = graph;
    this.#s = s;
    this.#queue = new Queue();

    for (let v = 0; v < graph.v(); v++) {
      this.#distTo[v] = Infinity;
    }
  }

  search() {
  }

  #relax(v) {
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
  BellmanFordSP,
};
