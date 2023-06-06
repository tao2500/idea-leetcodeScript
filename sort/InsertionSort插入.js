// 基本思想：在未排序数组中，从第二个数字开始，将其认为是新增加的数字，这样第二个数字只需与其左边的第一个数字（已排序）比较后排好序
// 时间复杂度：O(N^2) 空间复杂度：O(1) 稳定算法

function InsertionSort(nums) {
  let numLen = nums.length;
  // 当前待插入的值
  for (let i = 1; i < numLen; i++) {
    // 从右往左遍历已排好序的部分
    let num = nums[i];
    let j = i - 1
    while (j >= 0 && num < nums[j]) {
      // 如果当前值小于已排序部分的最大值，则将最大值换到当前值位置
      nums[j + 1] = nums[j];
      j--;
      // [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
    }
    nums[j + 1] = num;
  }
}

const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
InsertionSort(arr);
console.log(arr);
