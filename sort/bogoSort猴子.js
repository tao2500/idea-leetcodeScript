// 猴子排序 (Bogo Sort) 是个既不实用又原始的排序算法，其原理等同将一堆卡片抛起，落在桌上后检查卡片是否已整齐排列好，若不是就再抛一次。在最坏的情况下所需时间是无限的。
function bogosort(arr) {
  while (!isSorted(arr)) shuffle(arr);
}
// 重新排序(随机交换卡片)
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
// 验证是否是有序序列
function isSorted(arr) {
  for (let i = 1; i < arr.length; i++) if (arr[i - 1] > arr[i]) return false;
  return true;
}
const arr = [999,3,1,6,5,0,-1];
bogosort(arr);
console.log(arr);
