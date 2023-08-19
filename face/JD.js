// 1.小红的多彩糖葫芦
function fun (s) {
  let stack = s.split('');
  let older = null;
  let num = 0;
  for (let i of stack) {
    if (older && older === i){
      console.log(i);
      break;
    }
    older = i;
    num++;
  }
  console.log(num);
}
fun('abccca')


// 2.小红吃药 （通过10%）

// 3.到达终点的最少步数
