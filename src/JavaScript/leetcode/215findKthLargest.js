/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  const pq = new PQ(nums);
  let res;
  for (let i = 0; i < k; i++) res = pq.get();
  return res;
};

/**
 * 优先队列
 */
class PQ {
  pq = [0];

  constructor(nums) {
    this.pq = this.pq.concat(nums);
    for (let i = Math.floor(this.pq.length / 2); i >= 1; i--) this.sink(i);
  }

  less(a, b) {
    return this.pq[a] < this.pq[b];
  }

  exchange(a, b) {
    let tmp = this.pq[a];
    this.pq[a] = this.pq[b];
    this.pq[b] = tmp;
  }

  swim(k) {
    while (k > 1 && this.less(Math.floor(k / 2), k)) {
      this.exchange(k / 2, k);
      k = k / 2;
    }
  }

  sink(k) {
    while (2 * k <= this.pq.length - 1) {
      let j = 2 * k;
      if (j < this.pq.length && this.less(j, j + 1)) j++;
      if (!this.less(k, j)) break;
      this.exchange(k, j);
      k = j;
    }
  }

  get() {
    const res = this.pq[1];
    this.pq[1] = this.pq[this.pq.length - 1];
    this.pq.splice(this.pq.length - 1, 1);

    this.sink(1);
    return res;
  }
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));

export { findKthLargest };
