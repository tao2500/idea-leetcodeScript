function quickSort(arr, begin, end) {
  if(begin > end) return;
  let tmp = arr[begin];
  let i = begin;
  let j = end;
  while(i != j){
    // 从右往左寻找小于基准值的元素的位置j(&&的结合性为从左到右)
    while(arr[j] >= tmp && j > i) j--;
    // 从左往右寻找大于基准值的元素的位置i
    while(arr[i] <= tmp && j > i) i++;
    if(j > i) [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  // 此时i===j 都为基准位置
  arr[begin] = arr[i];
  arr[i] = tmp;
  // 递归继续排序
  quickSort(arr, begin, i-1);
  quickSort(arr, i+1, end);
}

const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
quickSort(arr, 0, arr.length - 1);
console.log(arr);

// 快速排序之所以比较快，是因为与冒泡排序相比，每次的交换时跳跃式的，每次排序的时候设置一个基准点，将小于等于基准点的数全部放到基准点的左边，将大于等于基准点的数全部放到基准点的右边。
// 这样在每次交换的时候就不会像冒泡排序一样每次只能在相邻的数之间进行交换，交换的距离就大的多了。因此总的比较和交换次数就少了，速度自然就提高了。
// 当然在最坏的情况下，仍可能是相邻的两个数进行了交换。因此快速排序的最差时间复杂度和冒泡排序是一样的都是O(n^2),它的平均时间复杂度为O(nlog2^n)。
