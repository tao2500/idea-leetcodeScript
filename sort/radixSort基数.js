// 基于计数排序，原理是将整数按位数切割成不同的数字，然后按每个位数分别比较。1. 将所有待比较数值（正整数）统一为同样的数位长度，数位较短的数前面补零。
// 2. 从最低位开始，依次进行一次排序（从大到小或从小到大）。  3. 这样从最低位排序一直到最高位排序完成以后, 数列就变成一个有序序列。
// 时间复杂度：O(k*N)，空间复杂度：O(k + N)，稳定算法
function radixSort(arr) {
  const max = Math.max(...arr);
  // 当前比较的位数为
  let exp = 1;
  while (Math.floor(max / exp) > 0) {
    countingSortForRadix(arr, exp);
    exp *= 10;
  }
}
// 比较排序arr的exp位数
function countingSortForRadix(arr, exp) {
  const n = arr.length;
  const output = new Array(n).fill(0);
  // 当前位数的数值的最终位置信息(桶)
  const count = new Array(10).fill(0);
  // 统计个位数字出现的次数
  for (let i = 0; i < n; i++) count[Math.floor(arr[i] / exp) % 10]++;
  // 累加计数，记录当前元素的正确位置（保证稳定）
  for (let i = 1; i < 10; i++) count[i] += count[i - 1];
  // 生成结果数组
  for (let i = n - 1; i >= 0; i--) {
    output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
    count[Math.floor(arr[i] / exp) % 10]--;
  }
  // 将结果覆盖原数组
  for (let i = 0; i < n; i++) arr[i] = output[i];
}
const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6]
radixSort(arr);
console.log(arr);
