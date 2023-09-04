class Node {
  item;

  next;
}

class Queue {
  #first;

  #last;

  #n;

  constructor() {
    this.#n = 0;
  }

  enqueue(item) {
    const oldLast = this.#last;

    this.#last = new Node();
    this.#last.item = item;

    if (this.isEmpty()) {
      this.#first = this.#last;
    } else {
      oldLast.next = this.#last;
    }

    this.#n++;
  }

  dequeue() {
    if (this.isEmpty()) {
      throw new Error('큐가 비어 있습니다.');
    }

    const { item } = this.#first;
    this.#first = this.#first.next;
    this.#n--;

    if (this.isEmpty()) {
      this.#last = undefined;
    }

    return item;
  }

  size() {
    return this.#n;
  }

  isEmpty() {
    return this.#first === undefined;
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
  Queue,
};
