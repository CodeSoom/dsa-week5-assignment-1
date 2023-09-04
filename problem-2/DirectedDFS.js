class DirectedDFS {
  #marked = [];

  constructor(diagraph, s) {
    this.#marked = Array.from({ length: diagraph.v() }, () => false);
    this.#dfs(diagraph, s);
  }

  #dfs(diagraph, v) {
  }

  reachable(v) {
  }
}

module.exports = {
  DirectedDFS,
};
