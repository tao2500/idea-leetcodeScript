// 计数排序是一种针对于特定范围之间的整数进行排序的算法。它通过统计给定数组中不同元素的数量（类似于哈希映射），然后对映射后的数组进行排序输出即可。
// 首先应创建一个初始为0长度为待排序数组中最大值+1的数组countArr，然后遍历待排序数组，用当前遍历到的数字为下标在countArr中相应+1，最后遍历输出countArr即可
// 如果输入数据的范围  range = max - min + 1  不明显大于要待排序数组的长度 n = arr.length，则计数排序是相当高效的，比时间复杂度为O(nlogn)的快速和归并排序都优秀。
// 计数排序适用于负输入，不适用于小数的情况。时间复杂度O(n),空间复杂度O(N),可稳定可不稳定,此处实现考虑了稳定性
function countSort(arr) {
  let max = Math.max(...arr);
  let min = Math.min(...arr);
  // 创建计数数组的长度
  let range = max - min + 1;
  // 用于保存元素最终顺序
  let count = new Array(range).fill(0);
  // 在排序后的输出数组
  let output = new Array(range).fill(0);
  let arrLen = arr.length;
  // 遍历原数组，在计数数组上相应+1，此处考虑了元素为负值的情况
  for (let i = 0; i < arrLen; i++) count[arr[i] - min]++;
  // 计算元素的最终顺序
  for (let i = 1; i < range; i++) count[i] += count[i - 1];
  // 从右往左遍历
  for (let i = arrLen - 1; i >= 0; i--)
  {
    // 计算出 arr[i] 在排序后数组的正确位置 count[arr[i] - min] - 1
    output[count[arr[i] - min] - 1] = arr[i];
    // 输出完成后相应待输入位置的元素也少一个
    count[arr[i] - min]--;
  }
  // 遍历最终结果覆盖到原数组
  for (let i = 0; i < arrLen; i++) arr[i] = output[i];
}

const arr = [-1, -3, 9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
countSort(arr);
console.log(arr);
