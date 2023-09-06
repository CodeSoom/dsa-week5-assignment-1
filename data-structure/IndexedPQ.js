const less = (a, b) => a < b;

class IndexedPQ {
  #items;

  #pq;

  #qp;

  #n;

  #comparer;

  constructor(maxCount, comparer = less) {
    this.#items = new Array(maxCount + 1);
    this.#pq = new Array(maxCount + 1).fill(-1);
    this.#qp = new Array(maxCount + 1).fill(-1);
    this.#n = 0;
    this.#comparer = comparer;
  }

  isEmpty() {
    return this.#n === 0;
  }

  size() {
    return this.#n;
  }

  contains(i) {
    return this.#qp[i] !== -1;
  }

  insert(i, item) {
    if (this.contains(i)) throw new Error('Index is already in the priority queue');

    this.#n++;
    this.#qp[i] = this.#n;
    this.#pq[this.#n] = i;
    this.#items[i] = item;
    this.#swim(this.#n);
  }

  delete(i) {
    const index = this.#qp[i];
    this.#exchange(index, this.#n--);
    this.#swim(index);
    this.#sink(index);
    this.#items[i] = undefined;
    this.#qp[i] = -1;
  }

  deleteMin() {
    if (this.isEmpty()) {
      throw new Error('Priority queue is empty');
    }

    const minIndex = this.#pq[1];
    this.#exchange(1, this.#n--);
    this.#sink(1);
    this.#qp[minIndex] = -1;
    this.#items[minIndex] = null;
    this.#pq[this.#n + 1] = -1;
    return minIndex;
  }

  change(index, newValue) {
    const oldValue = this.#items[index];
    this.#items[index] = newValue;

    if (this.#comparer(newValue, oldValue)) {
      this.#swim(this.#qp[index]);
    } else if (this.#comparer(oldValue, newValue)) {
      this.#sink(this.#qp[index]);
    }
  }

  #swim(i) {
    while (i > 1 && this.#less(Math.floor(i / 2), i)) {
      this.#exchange(i, Math.floor(i / 2));
      i = Math.floor(i / 2);
    }
  }

  #sink(i) {
    while (2 * i <= this.#n) {
      let j = 2 * i;
      if (j < this.#n && this.#less(j, j + 1)) j++;
      if (!this.#less(i, j)) break;
      this.#exchange(i, j);
      i = j;
    }
  }

  #less(i, j) {
    return this.#comparer(this.#items[this.#pq[i]], this.#items[this.#pq[j]]);
  }

  #exchange(i, j) {
    const swap = this.#pq[i];
    this.#pq[i] = this.#pq[j];
    this.#pq[j] = swap;
    this.#qp[this.#pq[i]] = i;
    this.#qp[this.#pq[j]] = j;
  }
}
module.exports = {
  IndexedPQ,
};
