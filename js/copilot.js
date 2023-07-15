// 在控制台中输出helloCopilot
console.log('helloCopilot');
let arr = [2, 5, 63, 7, 8, 9, 1, 2, 0, -8];

// 利用堆排序对arr数组排序
function heapSort(arr) {
  function adjustHeap(arr, i, length) {
    let temp = arr[i];
    // 从i结点的左子结点开始，也就是2i+1处开始
    for (let k = i * 2 + 1; k < length; k = k * 2 + 1) {
      // 如果左子结点小于右子结点，k指向右子结点
      if (k + 1 < length && arr[k] < arr[k + 1]) {
        k++;
      }
      // 如果子节点大于父节点，将子节点值赋给父节点（不用进行交换）
      if (arr[k] > temp) {
        arr[i] = arr[k];
        i = k;
      } else {
        break;
      }
    }
    // 将temp值放到最终的位置
    arr[i] = temp;
  }

  // 构建大顶堆
  for (let i = Math.floor(arr.length / 2 - 1); i >= 0; i--) {
    adjustHeap(arr, i, arr.length);
  }
  // 交换堆顶元素和末尾元素，重新调整堆
  for (let j = arr.length - 1; j > 0; j--) {
    [arr[0], arr[j]] = [arr[j], arr[0]];
    adjustHeap(arr, 0, j);
  }
  console.log(arr);
}
// heapSort(arr);

// 生成二叉树的节点类
class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// 利用数组及二叉树的节点类构造二叉树,返回二叉树的头结点
function buildTree(arr) {
  let tree = [];
  for (let i = 0; i < arr.length; i++) {
    tree[i] = new Node(arr[i]);
  }
  for (let i = 0; i < arr.length; i++) {
    let left = i * 2 + 1;
    let right = i * 2 + 2;
    if (tree[left]) {
      tree[i].left = tree[left];
    }
    if (tree[right]) {
      tree[i].right = tree[right];
    }
  }
  return tree;
}

// 层序遍历二叉树，返回结果用二维数组表示
function levelOrder(tree) {
  let result = [];
  let queue = [tree[0]];
  while (queue.length) {
    let len = queue.length;
    let temp = [];
    for (let i = 0; i < len; i++) {
      let node = queue.shift();
      temp.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(temp);
  }
  console.log(result);
}

levelOrder(buildTree(arr));


// 为了不断优化推荐效果，今日头条每天要存储和处理海量数据。假设有这样一种场景：我们对用户按照它们的注册时间先后来标号，对于一类文章，每个用户都有不同的喜好值，
// 我们会想知道某一段时间内注册的用户（标号相连的一批用户）中，有多少用户对这类文章喜好值为k。因为一些特殊的原因，
// 不会出现一个查询的用户区间完全覆盖另一个查询的用户区间(不存在L1<=L2<=R2<=R1)。
