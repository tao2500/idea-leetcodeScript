let arr = [1,2,3,4,5,6];
// for in 用于遍历对象的可枚举属性，返回的是属性名
for (let i in arr) {
  console.log(i);
}
console.log("for of：");
// for of 用于遍历可迭代对象，返回的是元素值
for (let i of arr) {
  console.log(i);
}
