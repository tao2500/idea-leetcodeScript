// 1. 增
// 1.1 push() 方法可向数组的末尾添加一个或多个元素，并返回新的长度。
// 1.2 unshift() 方法可向数组的开头添加一个或更多元素，并返回新的长度。
// 1.3 splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
let arr = [1, 2, 3, 4, 5];
console.log(arr.splice(2, 3, 6, 7, 8));
console.log(arr);
console.log("--------splice----------");

// 2. 删
// 2.1 pop() 方法用于删除并返回数组的最后一个元素。
// 2.2 shift() 方法用于把数组的第一个元素从其中删除，并返回第一个元素的值。
// 2.3 splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
// 2.4 filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。

// 3. 改
// 3.1 splice() 方法向/从数组中添加/删除项目，然后返回被删除的项目。
// 3.2 reverse() 方法用于颠倒数组中元素的顺序。
// 3.3 sort() 方法用于对数组的元素进行排序。
// 3.4 fill() 方法用于将一个固定值替换数组的元素。
arr = [1, 2, 3, 4, 5];
console.log(arr.fill(6, 2, 4));
console.log(arr);
arr = [1, 2, 3, 4, 5];
console.log(arr.fill(6));
console.log(arr);
console.log("--------fill----------");
// 3.5 copyWithin() 方法用于从数组的指定位置拷贝元素到数组的另一个指定位置中。
arr = [1, 2, 3, 4, 5];
console.log(arr.copyWithin(3, 0, 2));
console.log(arr);
console.log("--------copyWithin----------");

// 4. 查
// 4.1 slice() 方法可从已有的数组中返回选定的元素。
arr = [1, 2, 3, 4, 5];
console.log(arr.slice(2, 4));
console.log(arr);
console.log("--------slice----------");
// 4.2 indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
// 4.3 lastIndexOf() 方法可返回一个指定的字符串值最后出现的位置，在一个字符串中的指定位置从后向前搜索。
// 4.4 includes() 方法用于判断字符串是否包含指定的子字符串。
// 4.5 concat() 方法用于连接两个或多个数组。
arr = [1, 2, 3, 4, 5];
let arr2 = [6, 7, 8, 9, 10];
console.log(arr.concat(arr2));
console.log(arr2.concat(arr));
console.log(arr);
console.log("--------concat----------");
// 4.6 join() 方法用于把数组中的所有元素放入一个字符串。
// 4.7 toString() 方法可把数组转换为字符串，并返回结果。
// 4.8 toLocaleString() 方法可把数组转换为本地数组，并返回结果。
arr = [1111, 22222, 3333333, 4, 5];
console.log(arr.toString());
console.log(arr.toLocaleString());
console.log(arr);
console.log("--------toLocaleString----------");
// 4.9 valueOf() 方法返回 Array 对象的原始值。
arr = [1, 2, 3, 4, 5];
console.log(arr.valueOf());
console.log("--------valueOf----------");
// 4.10 forEach() 方法用于调用数组的每个元素，并将元素传递给回调函数。
// 4.11 map() 方法返回一个新数组，数组中的元素为原始数组元素调用函数处理后的值。
// 4.12 filter() 方法创建一个新的数组，新数组中的元素是通过检查指定数组中符合条件的所有元素。
arr = [1, 2, 3, 4, 5];
console.log(arr.filter((item, index, arr) => { return item > 3 }));
console.log(arr);
console.log("--------filter----------");
// 4.13 every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。
// 4.14 some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。
// 4.15 reduce() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从左到右）开始缩减，最终为一个值。
// 4.16 reduceRight() 方法接收一个函数作为累加器（accumulator），数组中的每个值（从右到左）开始缩减，最终为一个值。
// 4.17 find() 方法返回通过测试（函数内判断）的数组的第一个元素的值。
// 4.18 findIndex() 方法返回通过测试（函数内判断）的数组第一个元素的索引。
// 4.19 keys() 方法返回一个包含数组中每个索引键的Array Iterator对象。
// 4.20 values() 方法返回一个包含数组中每个值的Array Iterator对象。
// 4.21 entries() 方法返回一个包含数组中每个索引键值对的Array Iterator对象。
// 4.22 includes() 方法用来判断一个数组是否包含一个指定的值，如果是返回 true，否则false。
// 4.23 Array.from() 方法从一个类似数组或可迭代对象中创建一个新的数组实例。
// 4.24 Array.isArray() 用于确定传递的值是否是一个 Array。
console.log(Array.isArray(arr));
console.log("--------isArray----------");
// 4.25 Array.of() 方法创建一个具有可变数量参数的新数组实例，而不考虑参数的数量或类型。
console.log(Array.of('1', '2', '3', '4', '5'));
console.log("--------of----------");
// 4.26 copyWithin() 方法浅复制数组的一部分到同一数组中的另一个位置，并返回它，而不修改其大小。
// 4.27 fill() 方法用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。
// 4.28 flat() 方法会按照一个可指定的深度递归遍历数组，将所有元素与遍历到的子数组中的元素合并为一个新数组返回,默认展开1层。
arr = [1, 2, 3, [4, 5, 6, [7, 8, 9]]];
console.log(arr.flat());
console.log(arr.flat(1));
console.log(arr.flat(2));
console.log(arr);
console.log("--------flat----------");
// 4.29 flatMap() 方法首先使用映射函数映射每个元素，然后将结果展开一层成一个新数组并返回。
arr = [1, 2, 3, 4, 5];
console.log(arr.flatMap((num) => (num === 2 ? [2, 2] : 1)));
console.log(arr);
console.log("--------flatMap----------");
