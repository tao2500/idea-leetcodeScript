// 方法1：转JSON再转回来，但是不能拷贝函数，undefined，Symbol, 正则，Date，循环引用，Map，Set，WeakMap，WeakSet，Error，Promise等
let obj1 = { body: { a: 10 } };
let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.body.a = 20;
console.log(obj1);
// { body: { a: 10 } } <-- 沒被改到
console.log(obj2);
// { body: { a: 20 } }
console.log(obj1 === obj2);
// false
console.log(obj1.body === obj2.body);
// false

// 封装
let cloneObj = function(obj){
  let str, newObj = obj.constructor === Array ? [] : {};
  if(typeof obj !== 'object'){
    return;
  } else if(window.JSON){
    str = JSON.stringify(obj), //系列化对象
      newObj = JSON.parse(str); //还原
  } else {
    for(let i in obj){
      newObj[i] = typeof obj[i] === 'object' ?
        cloneObj(obj[i]) : obj[i];
    }
  }
  return newObj;
};


console.log("------------------");
// 方法2：递归拷贝，但是不能拷贝函数，undefined，正则，Date，Symbol，循环引用，Map，Set，WeakMap，WeakSet，Error，Promise等
function deepClone(obj, hash = new WeakMap()) {
  if (obj === null) return obj; // 如果是null或者undefined我就不进行拷贝操作
  if (obj instanceof Date) return new Date(obj);
  if (obj instanceof RegExp) return new RegExp(obj);
  // 可能是对象或者普通的值  如果是函数的话是不需要深拷贝
  if (typeof obj !== "object") return obj;
  // 是对象的话就要进行深拷贝
  if (hash.get(obj)) return hash.get(obj);
  let cloneObj = new obj.constructor();
  // 找到的是所属类原型上的constructor,而原型上的 constructor指向的是当前类本身
  hash.set(obj, cloneObj);
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      // 实现一个递归拷贝
      cloneObj[key] = deepClone(obj[key], hash);
    }
  }
  return cloneObj;
}
let str = {};
let obj = { a: {a: "hello", b: 21} };
deepClone(obj, str);
console.log(str.a);

console.log("------------------");
// 方法3：函数库lodash的cloneDeep方法，可以拷贝函数，undefined，正则，Date，Symbol，循环引用，Map，Set，WeakMap，WeakSet，Error，Promise等
// let _ = require('lodash');
let obj11 = {
  a: 1,
  b: { f: { g: 1 } },
  c: [1, 2, 3]
};
// let obj22 = _.cloneDeep(obj1);
// console.log(obj11.b.f === obj22.b.f);// false

// 方法4：直接使用Object.create()，但是不能拷贝函数，undefined，正则，Date，Symbol，循环引用，Map，Set，WeakMap，WeakSet，Error，Promise等
// function deepClone(initalObj, finalObj) {
//   let obj = finalObj || {};
//   for (let i in initalObj) {
//     let prop = initalObj[i];        // 避免相互引用对象导致死循环，如initalObj.a = initalObj的情况
//     if(prop === obj) {
//       continue;
//     }
//     if (typeof prop === 'object') {
//       obj[i] = (prop.constructor === Array) ? [] : Object.create(prop);
//     } else {
//       obj[i] = prop;
//     }
//   }
//   return obj;
// }
// let str = {};
// let obj = { a: {a: "hello", b: 21} };
// deepClone(obj, str);
// console.log(str.a);
