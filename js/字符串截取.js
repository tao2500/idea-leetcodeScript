let a = "1234567890";

console.log("1. slice,不会改变原数组");
console.log(a.slice(0, 3));
console.log(a.slice(-3));
console.log(a);

console.log("--------------------");
console.log("2. substring,不会改变原数组,负数会被转换为0");
console.log(a.substring(0, 3));
console.log(a.substring(-3));
console.log(a);

console.log("--------------------");
console.log("3. charAt,返回指定位置的字符");
console.log(a.charAt(0));

console.log("--------------------");
console.log("4. charCodeAt,返回指定位置的字符的Unicode编码");
console.log(a.charCodeAt(0));

console.log("--------------------");
console.log("5. concat,连接两个或更多字符串，并返回新的字符串，不改变原数组");
console.log(a.concat("123"));
console.log(a);

console.log("--------------------");
console.log("6. indexOf,返回字符串中检索指定字符第一次出现的位置");
console.log(a.indexOf("1"));

console.log("--------------------");
console.log("7. lastIndexOf,返回字符串中检索指定字符最后一次出现的位置");
console.log(a.lastIndexOf("1"));

console.log("--------------------");
console.log("8. match,找到一个或多个正则表达式的匹配");
console.log(a.match(/\d/g));

console.log("--------------------");
console.log("9. split,把字符串分割为字符串数组");
console.log(a.split(""));

console.log("--------------------");
console.log("10. join,把数组中的所有元素放入一个字符串");
console.log(a.split("").join("-"));
