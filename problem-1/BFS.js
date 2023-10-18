const { Queue } = require('../data-structure/Queue');
const { Stack } = require('../data-structure/Stack');

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

  #visit(v) {
    this.#marked[v] = true;
  }

  #bfs(graph, s) {
    this.#visit(s);

    const queue = new Queue();

    queue.enqueue(s);

    while (!queue.isEmpty()) {
      const v = queue.dequeue();

      for (const w of graph.adj(v)) {
        if (!this.#marked[w]) {
          this.#visit(w);
          this.#edgeTo[w] = v;
          queue.enqueue(w);
        }
      }
    }
  }

  hasPathTo(v) {
    return this.#marked[v];
  }

  pathTo(v) {
    if (!this.hasPathTo(v)) {
      return;
    }

    const path = new Stack();

    for (let i = v; i !== this.#s; i = this.#edgeTo[i]) {
      path.push(i);
    }

    path.push(this.#s);

    return path;
  }
}

module.exports = {
  BFS,
};
