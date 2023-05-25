// 防抖：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。
// 连续的事件，只需触发一次的回调场景有：1.搜索框搜索输入。只需要用户最后一次输入完再发送请求 2.手机号、邮箱格式的输入验证检测 3.窗口大小的 resize 。只需窗口调整完成后，计算窗口的大小，防止重复渲染。
function debounce (fun, time) {
  let timeout = false;
  return () => {
    if (timeout) {
      clearTimeout(timeout);
    }else {
      timeout = setTimeout(fun, time);
    }
  }
}
