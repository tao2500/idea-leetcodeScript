// 防抖：当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。
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
