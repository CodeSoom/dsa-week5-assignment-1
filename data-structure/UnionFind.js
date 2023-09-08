class UnionFind {
  #ids = [];

  #count = 0;

  constructor(n) {
    this.#count = n;
    this.#ids = Array.from({ length: n }, (_, i) => i);
  }

  count() {
    return this.#count;
  }

  connected(p, q) {
    return this.find(p) === this.find(q);
  }

  find(p) {
    return this.#ids[p];
  }

  union(p, q) {
    const pId = this.find(p);
    const qId = this.find(q);
    if (pId === qId) {
      return;
    }

    for (let i = 0; i < this.#ids.length; i++) {
      if (this.#ids[i] === pId) {
        this.#ids[i] = qId;
      }
    }

    this.#count--;
  }
}

module.exports = {
  UnionFind,
};
