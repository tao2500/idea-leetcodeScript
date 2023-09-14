// 柯里化（currying）又称部分求值。一个 currying 的函数首先会接受一些参数，接受了这些参数之后，该函数并不会立即求值，而是继续返回另外一个函数，刚才传入的参数在函数形成的闭包中被保存起来。待到函数被真正需要求值的时候，之前传入的所有参数都会被一次性用于求值。
function add() {
  let args = [...arguments];
  let inner = function () {
    args.push(...arguments);
    return inner;
  }
  // 输出函数时会自动调用函数的toString方法，利用改写该方法来计算总和
  inner.toString = function (){
    return args.reduce((previousValue, currentValue) => {
      return previousValue + currentValue;
    })
  }
  return inner;
}

console.log(add(1)(2)(3)(4).toString());
console.log("-----------------------------------------");


//函数柯里化封装（这个封装可以直接复制走使用）
function curry(fn, arg) {
  // 获取函数的参数个数,fn为需要被柯里化的函数
  let length = fn.length;
  // 保存柯里化函数的参数
  let args = arg || [];
  return function () {
    // 拼接参数,把类数组转化为数组
    let newArgs = args.concat(Array.prototype.slice.call(arguments));
    // 判断参数个数是否已经满足函数所需参数个数
    if (newArgs.length < length) {
      // 参数不满足，递归调用
      return curry.call(this, fn, newArgs);
    } else {
      // 参数已经满足，执行函数
      return fn.apply(this, newArgs);
    }
  }
}

//需要被柯里化的函数
function multiFn(a, b, c, d) {
  return a * b * c * d;
}

//multi是柯里化之后的函数
let multi = curry(multiFn, [1]);
console.log(multi(2)(3)(4));
console.log(multi(2, 3, 4));
console.log(multi(2)(3, 4));
console.log(multi(2, 3)(4));
// 新知识，函数的length属性，返回函数的形参个数
console.log(curry.length);
