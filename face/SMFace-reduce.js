// 数字马力一面复盘
// 参考链接： https://zhuanlan.zhihu.com/p/482678499#:~:text=%E7%BC%96%E5%86%99%E4%B8%80%E4%B8%AA%E5%87%BD%E6%95%B0%EF%BC%9AtoFlatArray%EF%BC%8C%E8%AF%A5%E5%87%BD%E6%95%B0%E6%8E%A5%E6%94%B6%E4%B8%80%E4%B8%AA%E5%B5%8C%E5%A5%97%E7%9A%84%E6%95%B0%E7%BB%84arr%E4%BD%9C%E4%B8%BA%E5%8F%82%E6%95%B0%EF%BC%8C%E8%BF%94%E5%9B%9E%E5%B9%B3%E9%93%BA%E7%9A%84%E4%B8%80%E7%BB%B4%E6%95%B0%E7%BB%84%E3%80%82%20const%20toFlatArray%20%3D%20arr,%3D%3E%20arr.reduce%20%28%28t%2C%20_%29%20%3D%3E%20%5B...t%2C
// reduce函数，参数为一个数组，返回一个值，这个值会作为下一次调用reduce函数的第一个参数，如果没有指定初始值，则第一次调用reduce函数时，数组的第一个元素作为初始值
let arr = [1, 2, 3, 4, 5];
// pre是上一次调用reduce函数的返回值，cur是当前元素，index是当前元素的索引，arr是当前数组
let ret = arr => arr.reduce((pre, cur, index, arr) => {
  // console.log(pre, cur, index, arr);
  return pre + cur;
}, 0);
console.log(ret(arr));
console.log("**********");

// reduce函数实现数组扁平化
let arr1 = [1, 2, [3, 4, [5, 6]]];
let ret1 = arr => arr.reduce((pre, cur) => {
  return pre.concat(Array.isArray(cur) ? ret1(cur) : cur);
}, []);
console.log(ret1(arr1));
console.log("**********");

// reduce函数实现嵌套对象的属性值，不存在时返回undefined
let obj = {
  a: {
    b: {
      c: 1
    }
  }
}
let ret2 = (obj, path) => path.split('.').reduce((pre, cur) => {
  return pre ? pre[cur] : undefined;
}, obj);
console.log(ret2(obj, 'a.b.c'));
console.log(ret2(obj, 'a.b.d'));
console.log("**********");

// reduce函数实现数类型转换
let arr2 = [1, 2, 3, 4, 5];
let ret3 = arr => arr.reduce((pre, cur) => {
  return pre * 10 + cur;});
console.log(ret3(arr2));


console.log("**********以下为js指针的探讨");
// js数组有依据正则表达式的替换方法吗？类似于字符串的replace方法
// 没有，可以用map方法手动实现

// js有像C中指针的概念吗？有的话怎么用？
// js中的对象是引用类型，所以可以用对象来模拟指针
var foo = {'bar': 1};

function tryToMungeReference(obj) {
  obj = {'bar': 2};  // won't change caller's object
}

function mungeContents(obj) {
  obj.bar = 2;       // changes _contents_ of caller's object
}
// 以上两个函数的区别在于，一个是修改了指针，一个是修改了指针指向的内容
// 以下是测试代码
tryToMungeReference(foo);
// true，说明foo的指针没有被修改
console.log(foo.bar === 1);

mungeContents(foo);
// true，说明foo的指针指向的内容被修改了
console.log(foo.bar === 2);

