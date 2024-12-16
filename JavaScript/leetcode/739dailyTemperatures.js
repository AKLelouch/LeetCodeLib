/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let res = [];
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

var dailyTemperatures2 = function (temperatures) {
  const n = temperatures.length;
  let res = new Array(n).fill(0);
  res[n - 1] = 0;
  for (let i = n - 2; i >= 0; i--) {
    let j = i + 1;
    while (temperatures[j] <= temperatures[i] && res[j] !== 0) j += res[j];
    if (temperatures[j] > temperatures[i]) res[i] = j - i;
  }
  return res;
};
console.log(dailyTemperatures2([34, 80, 80, 34, 34, 80, 80, 80, 80, 34]));
