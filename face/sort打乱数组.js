// sort底层是冒泡排序
function randomArr(arr) {
  arr.sort(() => Math.random() - 0.5);
}
let arr = [1, 2, 3, 3, 3, 2, 1];
randomArr(arr);
console.log(arr);
console.log(Math.random());
