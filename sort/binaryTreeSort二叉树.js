// 利用搜索二叉树的中序遍历来排序。时间复杂度：O(nlog2(n)),空间复杂度：O(logn)(中序遍历时，需要构建栈).属于稳定排序
// 定义一个二叉搜索树节点类
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
  get value() {
    return this._value;
  }
  set value(v) {
    this._value = v;
  }
}

// 定义一个二叉搜索树类，包含插入和中序遍历方法
class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new TreeNode(value);
    } else {
      this._insertNode(this.root, value);
    }
  }

  _insertNode(node, value) {
    if (value < node.value) {
      if (node.left === null) {
        node.left = new TreeNode(value);
      } else {
        this._insertNode(node.left, value);
      }
    } else {
      if (node.right === null) {
        node.right = new TreeNode(value);
      } else {
        this._insertNode(node.right, value);
      }
    }
  }

  inOrderTraversal() {
    const result = [];
    this._inOrderTraversalNode(this.root, result);
    return result;
  }

  _inOrderTraversalNode(node, result) {
    if (node !== null) {
      this._inOrderTraversalNode(node.left, result);
      result.push(node.value);
      this._inOrderTraversalNode(node.right, result);
    }
  }
}

function binaryTreeSort(arr) {
  const bst = new BinarySearchTree();

  // 将数组中的值插入二叉搜索树
  arr.forEach((value) => {
    bst.insert(value);
  });

  // 中序遍历二叉搜索树，得到排序后的数组
  return bst.inOrderTraversal();
}

// 测试用例
const arr8 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
console.log(binaryTreeSort(arr8));  // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
