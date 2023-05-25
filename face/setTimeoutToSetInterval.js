// 利用setTimeout模拟setInterval
function mySetInterval (fun, time) {
  let interval;
  function star() {
    fun();
    interval = setTimeout(star, time);
  }
  setTimeout(star, time);
  return () => clearTimeout(interval);
}
let clearInterval =mySetInterval(() => console.log("myFunction"), 1000);
