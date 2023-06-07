// 希尔排序也是一种插入排序，它是简单插入排序经过改进之后的一个更高效的版本，也称为缩小增量排序
// 希尔排序通过某个增量将数组元素划分为若干组(gap = len / 2)，然后分组进行插入排序，随后逐步缩小增量(gap = gap / 2)，继续按组进行插入排序操作，直至增量为1。
// 从而避免了大量的移动操作(跳过了中间的多余比较与移动)。其最坏时间复杂度依然为O(n2)，一些经过优化的增量序列如Hubbard经过复杂证明可使得最坏时间复杂度为O(n^3/2)
function shellSort(arr) {
  const arrLen = arr.length;
  for (let gap = Math.floor(arrLen / 2); gap > 0; gap = Math.floor(gap / 2)) {
    for (let i = gap; i < arrLen; i++) {
      // 当前分段数组的末尾元素
      const temp = arr[i];
      let j;
      // 从右往左遍历该分段数组的值，如果上一个元素大于末尾元素，则交换（类似插排）
      for (j = i; j >= gap && arr[j - gap] > temp; j -= gap) arr[j] = arr[j - gap];
      arr[j] = temp;
    }
  }
}

const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
shellSort(arr);
console.log(arr);
