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

// 3.
console.log(parseInt('2023-8-19'));
console.log(parseInt('2023-8-19ABCDE'));
console.log(parseInt('ABCDE2023-8-19'));

// 4.
console.log('a.b.c'.replace(/(.)\.(.)\.(.)/, '$2.$1.$0'));

//5
let arr = [];
for (var i = 0; i < 10; i++) {
  arr.push(() => console.log(i));
}
console.log(arr[7]());
console.log(arr[8]());
console.log(arr[9]());

// 20 typeof 用于判断基本类型除了null会得到object，引用类型只能判断function，instanceof 用于判断引用类型，
// 正确的判断类型的方法是使用Object.prototype.toString.call()方法
function f(a, ...arg) {
  console.log("-----------------------------------------------");
  console.log(typeof arguments);
  console.log(arguments instanceof Array);
  console.log(Object.prototype.toString.call(arguments));
}
f(1, 2, 3);


// 有感而发
console.log(typeof (new Map()));
