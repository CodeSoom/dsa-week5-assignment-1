class Edge {
  #v;

  #w;

  #weight;

  constructor(v, w, weight) {
    this.#v = v;
    this.#w = w;
    this.#weight = weight;
  }

  weight() {
    return this.#weight;
  }

  either() {
    return this.#v;
  }

  other(vertex) {
    if (vertex === this.#v) {
      return this.#w;
    }

    if (vertex === this.#w) {
      return this.#v;
    }
  }
}

module.exports = {
  Edge,
};
