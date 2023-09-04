const { Stack } = require('../data-structure/Stack');

class DirectedCycle {
  #marked = [];

  #edgeTo = [];

  #onStack = [];

  #cycle;

  constructor(diagraph) {
    this.#marked = Array.from({ length: diagraph.v() }, () => false);
    this.#edgeTo = Array.from({ length: diagraph.v() }, () => undefined);
    this.#onStack = Array.from({ length: diagraph.v() }, () => false);
  }

  #dfs(diagraph, v) {
  }

  hasCycle() {
  }

  cycle() {
  }
}

module.exports = {
  DirectedCycle,
};
