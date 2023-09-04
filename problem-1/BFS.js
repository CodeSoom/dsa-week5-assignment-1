class BFS {
  #marked = [];

  #edgeTo = [];

  #s;

  constructor(graph, s) {
    this.#marked = Array.from({ length: graph.v() }, () => false);
    this.#edgeTo = Array.from({ length: graph.v() }, () => undefined);
    this.#s = s;
    this.#bfs(graph, s);
  }

  #bfs(graph, s) {
  }

  hasPathTo(v) {
  }

  pathTo(v) {
  }
}

module.exports = {
  BFS,
};
