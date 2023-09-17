// call() 和 apply() 之间不同之处是： call() 方法分别接受参数。apply() 方法接受数组形式的参数。
// 如果要使用数组而不是参数列表，则 apply() 方法非常方便。
Function.prototype.myApply = function (thisArg, args) {
  if (!thisArg) thisArg = window;
  const fn = this;
  const uniqueKey = Symbol("uniqueKey");
  thisArg[uniqueKey] = fn;
  const result = thisArg[uniqueKey](...args);
  delete thisArg[uniqueKey];
  return result;
};

const obj = {
  name: 'jTao'
}

function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

greet.myApply(obj, ["Hello", " QAQ"]);
