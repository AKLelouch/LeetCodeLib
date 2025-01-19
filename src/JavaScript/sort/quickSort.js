export const quickSort = (nums, low, high) => {
  if (low >= high) return;
  let pivot = partition(nums, low, high);
  quickSort(nums, low, pivot - 1);
  quickSort(nums, pivot + 1, high);
  return nums;
};

const partition = (nums, low, high) => {
  let pivot = low;
  let i = low,
    j = high + 1;
  while (true) {
    while (nums[++i][0] < nums[pivot][0]) if (i === high) break;
    while (nums[--j][0] > nums[pivot][0]) if (j === low) break;
    if (i >= j) break;
    exchange(nums, i, j);
  }

  exchange(nums, pivot, j);
  return j;
};

const exchange = (nums, a, b) => {
  let tmp = nums[a];
  nums[a] = nums[b];
  nums[b] = tmp;
};

console.debug(quickSort(3, 0, 3));
