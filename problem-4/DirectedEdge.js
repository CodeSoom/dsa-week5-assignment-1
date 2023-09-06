class DirectedEdge {
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

  from() {
    return this.#v;
  }

  to() {
    return this.#w;
  }
}

module.exports = {
  DirectedEdge,
};
