// 将数按bucketSize个数一组入桶中（当为负数时将最小的数偏移到0）,然后再对桶中的数据排序，最后顺序输出每个桶中的数值，桶排序是一种用空间换取时间的排序
// 适用于数相对均匀分布，桶的个数也要合理设计 时间复杂度O(n+n*(log n -log bucketCount)),空间复杂度O(bucketSize * n),稳定算法
function bucketSort(arr, bucketSize = 5) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  // 需要桶的数量
  const bucketCount = Math.floor((max - min) / bucketSize) + 1;
  const buckets = new Array(bucketCount).fill(0).map(() => []);
  const arrLen = arr.length;
  // 将元素分配到桶中，此时桶中元素大小从左到右依次递增
  for (let i = 0; i < arrLen; i++) buckets[Math.floor((arr[i] - min) / bucketSize)].push(arr[i]);
  // 对每个桶进行排序
  for (let i = 0; i < bucketCount; i++) buckets[i].sort((a, b) => a - b);
  // 将桶中的元素合并到结果数组
  console.log(...buckets);
  return [].concat(...buckets);
}
const arr = [9, 7, 5, 11, 12, 2, 14, 3,-1, 10, 6];
console.log(bucketSort(arr));
