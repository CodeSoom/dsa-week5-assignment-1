const { PQ } = require('../data-structure/PQ');
const { Queue } = require('../data-structure/Queue');

class PrimMST {
  #marked = [];

  #mst;

  #pq;

  constructor(graph) {
  }

  #visit(graph, v) {
  }

  edges() {
    return this.#mst;
  }
}

module.exports = {
  PrimMST,
};
