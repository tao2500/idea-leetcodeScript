// 排序，手写了快速
// 2最后一个单词的长度，直接剪切后返回最后一个长度

console.log(undefined === true);
console.log(null === true);
console.log(undefined === null);

function test(x) {
  // delete x;
  console.log(x);
}
console.log(test(1));

// setInterval(alert(welcome), 1000);

console.log("------------------");
function a ( ){
  console.log(this);
}
a.call(null);

console.log("------------------");
let aa = 4 >= 6 || true && 1 || false;
console.log(aa);

console.log("------------------");
// for (var i = 0; i < 8 ; i++) {
//   setTimeout(() => {
//     console.log(i);
//   }, 0);
// }

console.log("------------------");
let arr = [1,2,3,4,5,6,7,8,9];
function forEachTest(x) {
  if (x % 3 === 0) return;
  console.log(x);
}
arr.forEach(forEachTest);

console.log("------------------");
// let xx = 1;
function xx (){
  console.log(1);
}
console.log(typeof xx);

console.log("------------------");
// map,返回新数组，不改变原数组
let arr2 = [1,2,3,4,5,6,7,8,9];
console.log(arr2.map((x) => x * 2));
console.log(arr2);

console.log("------------------");
// filter,筛选满足条件的元素，返回新数组
let arr3 = [1,2,3,4,5,6,7,8,9];
console.log(arr3.filter((x) => x % 2 === 0));
console.log(arr3);

console.log("------------------");
// forEach,遍历数组，不返回新数组
let arr4 = [1,2,3,4,5,6,7,8,9];
console.log(arr4.forEach((x) => x * x));
console.log(arr4);

console.log("------------------");
// some,只要有一个满足条件，就返回true,否则返回false,不改变原数组
let arr5 = [1,2,3,4,5,6,7,8,9];
console.log(arr5.some((x) => x % 2 === 0));
console.log(arr5);

console.log("------------------");
// every,只要有一个不满足条件，就返回false,否则返回true,不改变原数组
let arr6 = [1,2,3,4,5,6,7,8,9];
console.log(arr6.every((x) => x % 2 === 0));
console.log(arr6);

console.log("------------------");
// reduce,累加器，不改变原数组
let arr7 = [1,2,3,4,5,6,7,8,9];
console.log(arr7.reduce((x, y) => x + y));
console.log(arr7);











console.log("------------------");
// splice,删除元素，改变原数组
let arr8 = [1,2,3,4,5,6,7,8,9];
console.log(arr8.splice(0, 3));
console.log(arr8);

console.log("------------------");
// fill,填充元素，改变原数组
let arr9 = [1,2,3,4,5,6,7,8,9];
console.log(arr9.fill(0, 0, 3));
console.log(arr9);

console.log("------------------");
console.log("其他改变原数组的方法：push、pop、shift、unshift、reverse、sort");
