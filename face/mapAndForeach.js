// map方法不会影响原数组，但是会返回一个新数组，这个新数组的元素是对原数组的每个元素进行操作后的结果。
let arr = [1,2,3,4,5,6,7,8,9];
let ret = arr.map((x) => x * 2);
console.log(ret);
console.log(arr);

console.log("------------------");
// forEach方法不会返回新数组，但是会对原数组进行遍历操作。
// 这里改变原数组只针对于数组元素是对象(引用)的情况，对于数组元素是基本类型的情况，不会改变原数组。
// 因为基本类型我们当次循环拿到的ele，只是forEach给我们在另一个地方复制创建新元素，是和原数组这个元素没有半毛钱联系的！所以，我们使命给循环拿到的ele赋值都是无用功！
console.log("基本类型情况如下：");
let arr2 = [1,2,3,4,5,6,7,8,9];
let ret2 = arr2.forEach((x) => x * 2);
console.log(ret2);
console.log(arr2);
console.log("对象类型情况如下：");
let arr22 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}, {a: 5}];
let ret22 = arr22.forEach((x) => x.a = x.a * 2);
console.log(ret22);
console.log(arr22);


console.log("------------------");
// filter方法不会影响原数组，但是会返回一个新数组，这个新数组的元素是对原数组的每个元素进行操作后的结果。
let arr3 = [1,2,3,4,5,6,7,8,9];
let ret3 = arr3.filter((x) => x % 2 === 0);
console.log(ret3);
console.log(arr3);

console.log("------------------");
// reduce方法不会影响原数组，但是会返回一个新数组，这个新数组的元素是对原数组的每个元素进行操作后的结果。
let arr4 = [1,2,3,4,5,6,7,8,9];
let ret4 = arr4.reduce((x, y) => x + y);
console.log(ret4);
console.log(arr4);
