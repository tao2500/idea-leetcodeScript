Function.prototype.myCall = function (thisArg, ...args) {
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

// 示例用法
function greet(greeting, punctuation) {
  console.log(`${greeting}, ${this.name}${punctuation}`);
}

greet.myCall(obj, "Hello", "!");
