// 1.splice()方法，可以删除数组中的元素，也可以向数组中添加元素，返回值是被删除的元素组成的数组。
let arr = [1, 2, 3, 4, 5, 6];
console.log(arr.splice(1, 2, 7, 8, 9));
console.log(arr);
console.log("-----------------------------------------");

// 2.slice()方法，返回一个新的数组，包含从 start 到 end （不包括该元素）的 arrayObject 中的元素。
let arr1 = [1, 2, 3, 4, 5, 6];
console.log(arr1.slice(1, 3));
console.log(arr1);
