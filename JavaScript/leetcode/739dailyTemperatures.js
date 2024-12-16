/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let singleStack = new SingleStack();
  let res = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    res.unshift(singleStack.push([temperatures[i], i]));
  }
  return res;
};

class SingleStack {
  stack = [];
  constructor() {}

  push(val) {
    const [inputTemp, inputIndex] = val;
    this.stack.push(val);
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = this.stack.length - 2; i >= 0; i--) {
      const [temp, index] = this.stack[i];
      if (inputTemp < temp) {
        this.stack[i + 1] = this.stack[i];
        this.stack[i] = val;
        min = Math.min(min, index - inputIndex);
      }
    }
    return min === Number.MAX_SAFE_INTEGER ? 0 : min;
  }
}
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
