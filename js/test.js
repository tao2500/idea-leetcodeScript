// console.log(typeof ("1"));
//
// console.log(isNumber('2'));
// function isNumber(n){
//   console.log();
//   console.log(!isNaN(n));
//   return typeof n === 'number' && !isNaN(n);
// }

// console.log(new Array(..."ABC"));

// console.log(["a", "b"].includes("a"));

// let arr = [1,1,2];
// console.log([...new Set(arr)])
// console.log(new Array(...new Set(arr)));

// console.log(-0.2 % 1);

// const s = "    123   ";
// console.log(s.length);
// let text = s.trim();
// console.log(text.length);


// 逻辑 && 优先级高于 ||
console.log(1 || 2 && 3 || 4);
console.log(1 || (2 && 3) || 4);
console.log((1 || 2) && (3 || 4));
// && 前面为真，返回后面的值
console.log(3 && 1);
console.log(1 || 2 && (3 || 4));
// || 前面为真，返回前面的值, 前面为假，返回后面的值
console.log(3 || 1);

// '+'法优先级高于三目运算符
let a = '?';
console.log("？？test" + (a === '?') ? 'a' : 'b');
// “??test?” !== “a”
console.log("？？test" + a === '?' ? 'a' : 'b');

// 幂运算结合律从右到左
console.log(2 ** 3 ** 2);
console.log((2 ** 3) ** 2);

// 逗号运算符优先级最低
console.log(1 + 2, 3 + 4);

// 幂运算符优先级高于乘除
console.log("幂运算符优先级高于乘除");
console.log(2 * 3 ** 2);
console.log(2 ** 3 * 2);
