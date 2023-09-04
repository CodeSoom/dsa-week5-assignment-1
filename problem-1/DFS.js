const { Stack } = require('../data-structure/Stack');

class DFS {
  #marked = [];

  #edgeTo = [];

  #s;

  constructor(graph, s) {
    this.#marked = Array.from({ length: graph.v() }, () => false);
    this.#edgeTo = Array.from({ length: graph.v() }, () => undefined);
    this.#s = s;
    this.#dfs(graph, s);
  }

  #dfs(grpah, v) {
  }

  hasPathTo(v) {
  }

  pathTo(v) {
  }
}

module.exports = {
  DFS,
};
