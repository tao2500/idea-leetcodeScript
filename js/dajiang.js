var line;
function solveMeFirst (a, b) {
  let ret = [];
  for(let i = a; i <= b; i++) {
    let x = parseInt(i/100%10);
    let b = parseInt(i/10%10);
    let c = parseInt(i%10);
    if(i === x*x*x + b*b*b + c*c*c) ret.push(i);
  }
  if (ret.length == 0) ret.push("no");
  return ret
};
var c = solveMeFirst(300, 380);
console.log(...c);
