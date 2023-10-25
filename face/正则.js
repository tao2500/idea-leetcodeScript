// 创建正则表达式的两种方式
// 1.字面量
let reg1 = /\d/g;

// 2.构造函数
let reg2 = new RegExp("\\d", "g");
let phone = new RegExp("1[3-9]\\d{9}", "g");

// 两种方式的区别
// 1.字面量方式，不需要转义
// 2.构造函数方式，需要转义
// 3.字面量方式，不能使用变量
// 4.构造函数方式，可以使用变量

// 正则表达式的使用
let str = "1234567890";
let reg = /\d/g;
// match方法，返回匹配到的数组
console.log(str.match(reg));
console.log("-----------match---------");

// replace方法，返回替换后的字符串
console.log(str.replace(reg, "a"));
console.log("-----------replace---------");

// search方法，返回匹配到的位置
console.log(str.search(reg));
console.log("-----------search---------");

// split方法，返回匹配到的数组
console.log(str.split(reg));
console.log("-----------split---------");

// exec方法，返回匹配到的数组
console.log(reg.exec(str));
console.log("-----------exec---------");

// test方法，返回布尔值
console.log(reg.test(str));
console.log("-----------test---------");


