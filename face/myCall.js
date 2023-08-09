// thisArg为this需指向的对象, 只需把该方法添加到thisArg中this值自然就指向thisArg了
// 参考链接：https://github.com/mqyqingfeng/Blog/issues/11
Function.prototype.myCall = function (thisArg, ...args) {
  // 当传入上下文为null时指向window
  if (!thisArg) thisArg = window;
  // 此时this为待执行函数greet
  const fun = this;
  // 创建唯一的属性名
  const uniqueKey = Symbol("uniqueKey");
  // 将函数设为对象的属性（调用后this值自然就指向该对象）
  thisArg[uniqueKey] = fun;
  // 执行该函数
  const result = thisArg[uniqueKey](...args);
  // 删除该函数
  delete thisArg[uniqueKey];

  return result;
};

const obj = {
  name: 'jTao'
}

// 示例用法
function greet(greeting, punctuation) {
  // react
  console.log(`${greeting}, ${this.name}${punctuation}`);
}
// Hello, jTao!
// 通过函数（对象）.方法调用，此时方法的this值为该函数（对象）
greet.myCall(obj, "Hello", "!");
