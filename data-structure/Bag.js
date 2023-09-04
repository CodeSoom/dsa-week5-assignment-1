class Node {
  item;

  next;
}

class Bag {
  #first;

  #n;

  constructor() {
    this.#n = 0;
  }

  add(item) {
    const oldFirst = this.#first;

    this.#first = new Node();
    this.#first.item = item;
    this.#first.next = oldFirst;
    this.#n++;
  }

  isEmpty() {
    return this.#n === 0;
  }

  size() {
    return this.#n;
  }

  [Symbol.iterator]() {
    let current = this.#first;

    return {
      next() {
        if (current === undefined) {
          return { done: true };
        }

        const value = current.item;

        current = current.next;

        return { done: false, value };
      },
    };
  }
}

module.exports = {
  Bag,
};
