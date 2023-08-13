//不利用中间变量交换两个值的方法
function swap1(x, y) {
  x = x + y;
  y = x - y; //将上一步的x+y代入x
  x = x - y;
  return [x, y];
}

function swap2(x, y) {
  x = x ^ y;
  y = x ^ y;
  x = x ^ y; //在异或中相同为0，不同为1；原理就是a^b^a在各种情况下均=b
  return [x, y];
}

function swap3(x, y){
  x = x * y;
  y = x / y;
  x = x / y;
  return [x, y];
}

console.log(swap1(1, 2));
console.log(swap2(3, 2));
console.log(swap3(1, 2));
