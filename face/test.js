// 测试timeout的bool值
// let timeout;
// console.log(!timeout);
// timeout = setTimeout(() => console.log("MyFunction"), 3000);
// console.log(!timeout);
// clearTimeout(timeout);
// console.log(!timeout);

// 测试函数调用原型链中函数方法的this值
function fun () {
  let name = "function";
  function test1 () {
    let name = "function1";
    console.log(this.name);
  }
  test1();
}
fun();
