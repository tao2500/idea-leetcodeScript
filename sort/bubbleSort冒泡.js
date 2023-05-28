function bubbleSort(arr) {
  let arrLen = arr.length;
  // n个元素冒泡只需冒泡n-1次
  for (let i = 0; i < arrLen - 1; i++) {
    // 经过一次冒泡，最后一位元素已经是最大值，故不用再比较最后一位元素
    for (let j = 0; j < arrLen - i; j++) {
      if (arr[j] > arr[j + 1]) [[arr[j], arr[j + 1]]] = [[arr[j + 1], arr[j]]]
    }
  }
}

const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
const arr1 = [9,8,7,6,5,4,3,2,1,0];
bubbleSort(arr1);
console.log(arr1);
