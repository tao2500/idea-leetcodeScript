function demo() {
  (function () {
    var x = "hello, 这里用var模拟let";
    console.log("这里是demo方法 ：" + x);
  })();

  try {
    console.log(x);
  }catch (error) {
    console.log(error);
  }
}
demo();
