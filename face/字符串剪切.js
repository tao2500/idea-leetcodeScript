// 1.slice方法，返回新子串，不改变原字符串
let a = "123456789";
console.log(a.slice(0, 3));
console.log(a);

console.log("------------------");
// 2.substring方法，返回新子串，不改变原字符串
let b = "123456789";
console.log(b.substring(0, 3));
console.log(b);

console.log("------------------");
// 3.substr方法，返回新子串，不改变原字符串
let c = "123456789";
console.log(c.substr(0, 3));
console.log(c);

console.log("------------------");
// 4.split方法，返回新数组，不改变原字符串
let d = "123456789";
console.log(d.split("3"));
console.log(d);

console.log("------------------");
// 5.replace方法，返回新字符串，不改变原字符串
let e = "123456789";
console.log(e.replace("3", "a"));
console.log(e);

console.log("------------------");
// 6.concat方法，返回新字符串，不改变原字符串
let f = "123456789";
console.log(f.concat("a"));
console.log(f);

console.log("------------------");
// 7.indexOf方法，返回新字符串，不改变原字符串
let g = "123456789";
console.log(g.indexOf("3"));
console.log(g);

console.log("------------------");
// 8.includes方法，返回新字符串，不改变原字符串
let h = "123456789";
console.log(h.includes("3"));
console.log(h);

console.log("------------------");
// 9.search方法，返回新字符串，不改变原字符串
let i = "123456789";
console.log(i.search("3"));
console.log(i);

console.log("------------------");
// 10.trim方法，返回新字符串，不改变原字符串
let j = "  123456789  ";
console.log(j.trim());
console.log(j);

console.log("------------------");
// 11.repeat方法，返回新字符串，不改变原字符串
let k = "123456789";
console.log(k.repeat(3));
console.log(k);

console.log("------------------");
console.log("总结，字符串的方法，返回新字符串，不改变原字符串")
