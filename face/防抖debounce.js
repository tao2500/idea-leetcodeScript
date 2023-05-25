// 防抖：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。
// 连续的事件，只需触发一次的回调场景有：1.搜索框搜索输入。只需要用户最后一次输入完再发送请求 2.手机号、邮箱格式的输入验证检测 3.窗口大小的 resize 。只需窗口调整完成后，计算窗口的大小，防止重复渲染。
function debounce (fun, time) {
  let timeout = false;
  return () => {
    let context = this;
    let args = arguments;
    if (timeout) {
      clearTimeout(timeout);
    }else {
      timeout = setTimeout(() => {
        fun.apply(context, args);
      }, time);
    }
  }
}

// 第一次立即执行版本，此后当经过time时间后定时器将timeout置为null（表示此事允许事件执行，当再次触发事件时callNow == !timeout === true，立即执行fun）
// 同时设置定时器，表示此后time时间内不允许触发事件函数，直到定时器执行，允许再次执行fun...
// 若在time时间内callNow为false，触发只会重置timeout，不会执行fun。
function immediatelyDebounce (fun, time, bool) {
  let timeout;
  // let bool = immediate;
  return () => {
    let context = this;
    let args = arguments;
    if (timeout) clearTimeout(timeout);
    if (bool) {
      // 第一次触发，马上执行 (当timeout未赋值时，！timeout === true， 当timeout为setTimeOut的返回值或clearTimeOut的返回值时，！timeOut === false)
      let callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, time);
      if (callNow) {
        fun.apply(context, args);
      }
      // bool = false;
    }else {
      timeout = setTimeout(() => {
        fun.apply(context, args);
      }, time);
    }
  }
}

window.addEventListener("scroll", immediatelyDebounce(() => {
  console.log("MyFunction \\" + Date.now())
}, 3000, true));
