function selectSort(arr) {
  let maxIndex = 0;
  let arrLen = arr.length;
  for (let i = 0; i < arrLen - 1; i++) {
    let maxVal = Number.MIN_VALUE;
    for (let j = 0; j < arrLen - i; j++) {
      if (arr[j] > maxVal) {
        maxVal = arr[j];
        maxIndex = j;
      }
    }
    // 交换最大值与数组末尾元素
    [arr[arrLen - 1 - i], arr[maxIndex]] = [arr[maxIndex], arr[arrLen - i - 1]]
  }
}

const arr = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
const arr1 = [9,8,7,6,5,4,3,2,1,0];
selectSort(arr1);
console.log(arr1);
