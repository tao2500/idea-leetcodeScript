const obj = Object.create(null);
console.log(obj);
// console.log(obj.toString());

// 字面量创建的对象，其原型是Object.prototype
console.log("------------------");
const obj2 = {};
console.log(obj2);
console.log(obj2.toString());
