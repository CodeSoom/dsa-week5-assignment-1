const { PQ } = require('../data-structure/PQ');
const { Queue } = require('../data-structure/Queue');
const { UnionFind } = require('../data-structure/UnionFind');

class KruskalMST {
  #mst = new Queue();

  constructor(graph) {
  }

  edges() {
    return this.#mst;
  }
}

module.exports = {
  KruskalMST,
};
