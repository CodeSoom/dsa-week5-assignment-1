class Stack {
  #capacity;

  #items;

  #n;

  constructor(capacity) {
    this.#capacity = capacity;
    this.#items = new Array(capacity);
    this.#n = 0;
  }

  push(item) {
    if (this.isFull()) {
      throw new Error('용량을 초과했습니다.');
    }

    this.#items[this.#n] = item;
    this.#n = this.#n + 1;
  }

  pop() {
    if (this.isEmpty()) {
      throw new Error('스택이 비어있습니다.');
    }

    this.#n = this.#n - 1;
    return this.#items[this.#n];
  }

  size() {
    return this.#n;
  }

  isEmpty() {
    return this.#n === 0;
  }

  isFull() {
    return this.#n >= this.#capacity;
  }

  [Symbol.iterator]() {
    let index = this.#n;
    const data = this.#items;

    return {
      next() {
        index = index - 1;
        return index >= 0
          ? { done: false, value: data[index] }
          : { done: true };
      },
    };
  }
}

module.exports = {
  Stack,
};
