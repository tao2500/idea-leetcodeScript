// 插值查找类似于二分查找，和二分查找一样，目标的数据已经从小到大排好序，是二分查找的改进。不过是通过预测的索引值进行分区，而不是简单的二分。
// 有点类似于查字典，比如我们要查 Democracy 这个单词 第一步是锁定字母D，然后翻到D所在的区域，再逐一查找。
// 对于数据量较大，关键字分布比较均匀的查找表来说，采用插值查找, 速度较快,否则应选用二分
function interpolationSearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right && target >= arr[left] && target <= arr[right]) {
    if (left === right) return arr[left] === target ? left : -1;
    // 估计 target 的大概的位置（索引），然后把这个所以当成边界索引（二分查找中的那个中点）
    const position = left + Math.floor(((target - arr[left]) * (right - left)) / (arr[right] - arr[left]));
    if (arr[position] === target) return position;
    arr[position] < target ? left = position + 1 : right = position - 1;
  }
  return -1;
}

const sortedArr3 = [2, 3, 5, 6, 7, 9, 10, 11, 12, 14];
console.log(interpolationSearch(sortedArr3, 10));
console.log(interpolationSearch(sortedArr3, 4));
