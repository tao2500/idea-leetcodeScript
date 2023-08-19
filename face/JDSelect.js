// 1. 对象当对象的键
let obj = {
  name: '小明',
}
let obj2 = {
  obj: '小鸿',
}
console.log(obj2.obj);
let map = new Map();
map.set(obj, '小红');
console.log(map.get(obj));


// 2. contentediable的作用 contentediable="true" 使元素可编辑
// <div contentEditable="true">
//   <p>Edit this content to add your own quote</p>
// <div>

