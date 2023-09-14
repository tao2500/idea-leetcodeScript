// 节流：当持续触发事件时，保证一定时间段内只调用一次事件处理函数（一直点击，则经过间隔时间成功触发一次）
// 比如在页面的无限加载场景下，我们需要用户在滚动页面时，每隔一段时间发一次 Ajax 请求，而不是在用户停下滚动页面操作时才去请求数据。这样的场景，就适合用节流技术来实现。
// 间隔一段时间执行一次回调的场景有：1.滚动加载，加载更多或滚动到底部监听 2.谷歌搜索框，搜索联想功能 3.高频点击提交，表单重复提交 4.省市信息对应字母快速选择
// 函数节流主要有两种实现方法：时间戳和定时器
// 定时器节流, 如果定时器为空则创建一个定时器，待执行后清除定时器。若再次出发事件...（先等待再执行）
// 当最后一次停止触发后，由于定时器的delay延迟，可能还会执行一次函数。
function throttle(fun, time) {
  let timeout = null;
  return () => {
    let conText = this;
    let arg = arguments;
    if (!timeout){
      timeout = setTimeout(() => {
        fun.apply(conText, arg);
        timeout = null;
      }, time);
    }
  }
}

// 时间戳节流，当当前时间超过规定等待时间后执行，执行后在规定时间段内不允许再次执行（先执行再等待）
// 其中先执行的原理为：给scroll事件绑定函数与真正触发事件的间隔一般大于delay，如果你非要在网页加载1000毫秒以内就去滚动网页的话，我也没办法o(╥﹏╥)o
function timeThrottle (fun, time) {
  let timer = Date.now();
  return () => {
    let conText = this;
    let arg = arguments;
    let now = Date.now();
    if (now - timer >= time) {
      fun.apply(conText, arg);
      timer = now;
    }
  }
}

// 时间戳 + 定时器结合版 第一次触发立刻执行，最后一次触发经过time时间后执行
function timeThrottleTimeout(fun, time) {
  let timer = Date.now();
  let timeout = null;
  return () => {
    let context = this;
    let args = arguments;
    let now = Date.now();
    clearTimeout(timeout);
    if (now - timer >= time) {
      fun.apply(context, args);
      timer = now;
    }else {
      timeout = setTimeout(() => {
        fun.apply(context, time);
      }, time);
    }
  }
}

function f() {
  console.log("MyFunction");
}

window.addEventListener("scroll", timeThrottleTimeout(f, 1000));
