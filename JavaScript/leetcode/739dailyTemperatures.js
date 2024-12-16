/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  // let singleStack = new SingleStack();
  let res = [];
  for (let i = temperatures.length - 1; i >= 0; i--) {
    // res.unshift(singleStack.push([temperatures[i], i]));
  }
  let head = new LinkNode(0, 0, null);
  head.next = new LinkNode(
    temperatures[temperatures.length - 1],
    temperatures.length - 1,
    null
  );
  res.unshift(0);
  for (let i = temperatures.length - 2; i >= 0; i--) {
    let prevNode = head;
    let nextNode = head.next;
    let min = Number.MAX_SAFE_INTEGER;
    const inputTemp = temperatures[i];
    const inputIndex = i;
    while (true) {
      if (!nextNode) {
        prevNode.next = new LinkNode(inputTemp, inputIndex, null);
        break;
      }

      const temp = nextNode.temperature;
      const index = nextNode.index;
      if (inputTemp < temp) {
        min = Math.min(min, index - inputIndex);
        prevNode = nextNode;
        nextNode = nextNode.next;
      } else if (inputTemp > temp) {
        const node = new LinkNode(inputTemp, inputIndex, nextNode);
        prevNode.next = node;
        break;
      } else if (inputTemp === temp) {
        nextNode.index = inputIndex;
        break;
      }
    }
    res.unshift(min === Number.MAX_SAFE_INTEGER ? 0 : min);
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
      } else if (inputTemp === temp) {
      }
    }
    return min === Number.MAX_SAFE_INTEGER ? 0 : min;
  }
}

class LinkNode {
  temperature = null;
  index = null;
  next = null;

  constructor(temperature, index, next) {
    this.temperature = temperature;
    this.index = index;
    this.next = next;
  }
}
console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
