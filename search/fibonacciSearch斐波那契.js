// 与二分查找类似，只是改变了 mid 值，https://zq99299.github.io/dsalg-tutorial/dsalg-java-hsp/08/04.html#%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86

function FibonacciSearchTest (arr, findVal) {
  console.log("原数组：" + arr);
  let result = fibSearch(arr, findVal);
  console.log("查找值 " + findVal + "：" + (result === -1 ? "未找到" : "找到值，索引为：" + result));
  }

let max_size = 20;

function  fibSearch(arr, key) {
  // 构建一个斐波那契数列
  let f = fib();
  // 查找 k，由数组长度，找到在斐波那契数列中的一个值
  let k = 0;
  let low = 0;
  let high = arr.length - 1;
  while (high > f[k] - 1) {
    k++;
  }
  // 构建临时数组
  let temp = JSON.parse(JSON.stringify(arr));
  // 将临时数组扩充的值用原始数组的最后一个值（最大值）填充
  for (let i = high + 1; i < temp.length; i++) {
    temp[i] = arr[high];
  }

  let mid = 0;
  // 当两边没有交叉的时候，就都可以继续查找
  while (low <= high) {
    if (k === 0) {
      // 如果 k = 0 的话，就只有一个元素了，mid 则就是这个元素
      mid = low;
    } else {
      mid = low + f[k - 1] - 1;
    }
    // 要查找的值说明在数组的左侧
    if (key < temp[mid]) {
      high = mid - 1;
      // 1. 全部元素 = 前面的元素 + 后面的元素
      // 2. f[k] = f[k-1] + f[k-2]
      // k -1 , 得到这一段的个数，然后下一次按照这个个数进行黄金分割
      k--;
    }
    // 要查找的值在数组的右侧
    else if (key > temp[mid]) {
      low = mid + 1;
      k -= 2;
    }
    // 找到的话
    else {
      if (mid <= high) {
        return mid;
      }
        // 当 mid 值大于最高点的话
      // 也就是我们后面填充的值，其实他的索引就是最后一个值，也就是 high
      else {
        return high;
      }
    }
  }
  return -1;
}

function fib() {
  let f = new Array(20);
  f[0] = 1;
  f[1] = 1;
  for (let i = 2; i < 20; i++) {
    f[i] = f[i - 1] + f[i - 2];
  }
  return f;
}

FibonacciSearchTest([2, 3, 5, 6, 7, 9, 10, 11, 12, 14], 15);
