// bind() 方法会创建一个新函数，当这个新函数被调用时，它的 this 值是传递给 bind() 的第一个参数, 它的参数是 bind() 的其他参数和其原本的参数。(柯里化？)
// 当使用 new 操作符调用绑定函数时，bind 的第一个参数无效
Function.prototype.myApply = function (thisArg, args) {
  const fn = this;
  const uniqueKey = Symbol("uniqueKey");
  thisArg[uniqueKey] = fn;

  const result = thisArg[uniqueKey](...args);
  delete thisArg[uniqueKey];

  return result;
};

Function.prototype.myBind = function (thisArg, args1, ...args2) {
  const fn = this;
  return function (...args2) {
    return fn.myApply(thisArg, args1.concat(args2));
  };
};

const obj = {
  name: 'jTao'
}

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name} ${punctuation}`);
}

const boundGreet = greet.myBind(obj, "Hey");
boundGreet("QAQ");
