const mergeSort = function (nums, left, right) {
  if (left >= right) return;
  let mid = left + Math.floor((right - left) / 2);
  mergeSort(nums, left, mid);
  mergeSort(nums, mid + 1, right);
  merge(nums, left, mid, right);
};

const merge = function (nums, left, mid, right) {
  let tmp = new Array(right - left + 1);
  let i = left;
  let j = mid + 1;
  let position = 0;
  while (i <= mid && j <= right) {
    // 合并
    if (nums[i] <= nums[j]) {
      tmp[position++] = nums[i++];
    } else {
      tmp[position++] = nums[j++];
    }
  }

  // 如果两个数组还有剩余内容
  while (i <= mid) {
    tmp[position++] = nums[i++];
  }
  while (j <= right) {
    tmp[position++] = nums[j++];
  }

  for (let i = 0; i < tmp.length; i++) {
    nums[left + i] = tmp[i];
  }
};

const nums = [7, 3, 2, 6, 0, 1, 5, 4];
mergeSort(nums, 0, 7);
console.log(nums.toString());
