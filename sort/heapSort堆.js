// 堆排序是一种选择排序，它的最坏，最好，平均时间复杂度均为O(nLogN)，它是不稳定排序
// 在二叉树中，每个结点的值都大于或等于其左右孩子结点的值(arr[i] >= arr[2i+1] && arr[i] >= arr[2i+2])，称为大顶堆(升序)，反之称为小顶堆
function heapSort(arr) {
  let n = arr.length;
  // 自底向上构建大顶堆,堆中非叶子节点的位置下标为【0，arr.length/2-1】
  for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
    heapify(arr, n, i);
  }
  // 逐个提取元素（将最大值（根）放到最后）并调整堆结构（重新构造大顶堆）
  for (let i = n - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];
    // 最后一个元素已排序，不再参与大顶堆构建
    n--;
    // 此时根节点的左右子树已经是大顶堆，只要对根节点重新构造
    heapify(arr, n, 0);
  }
}
// 构造以i为根节点的大顶堆
function heapify(arr, n, i) {
  // 以i为顶点的子树的根与其左右孩子中最大值所在的下标
  let largest = i;
  const left = 2 * i + 1;
  const right = 2 * i + 2;
  if (left < n && arr[left] > arr[largest]) largest = left;
  if (right < n && arr[right] > arr[largest]) largest = right;
  // 如果最大值不在当前子树的根节点，则交换最大值与更节点的值
  if (largest !== i) {
    [arr[i], arr[largest]] = [arr[largest], arr[i]];
    // 再对原先最大值所在的子树构造大顶堆（此时该子树可能不再是大顶堆）
    heapify(arr, n, largest);
  }
}

const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
heapSort(arr);
console.log(arr);  // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
