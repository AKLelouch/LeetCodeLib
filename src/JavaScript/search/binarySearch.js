const binarySearchRecursion = (array, head, tail, target) => {
  const mid = parseInt((tail + head) / 2);
  if (array[mid] === target) return mid;
  if (target < array[mid]) {
    return binarySearchRecursion(array, head, mid, target);
  }
  if (array[mid] < target) {
    return binarySearchRecursion(array, mid + 1, tail, target);
  }
};

const binarySearchIterate = (array, target) => {
  let i = 0;
  let j = array.length;
  while (i < j) {
    let mid = parseInt((i + j) / 2);
    if (array[mid] === target) return mid;
    if (target < array[mid]) {
      j = mid;
    }
    if (array[mid] < target) {
      i = mid + 1;
    }
  }
  return -1;
};

export { binarySearchIterate, binarySearchRecursion };
