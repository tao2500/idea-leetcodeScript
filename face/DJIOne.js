// 从{1,2,3,4,5,6,7,8,9}中随机挑选不重复的5个数字作为输入数组'selectedDigits'，能组成多少个互不相同且无重复数字的3位数？请编写程序，从小到大顺序，以数组形式，输这些3位数。
// idea1: 暴力法三重循环
// idea2:
function ThreeDigitNumbers (selectedDigits) {
  const arr = [];
  const letLen = selectedDigits.length;
  for(let i = 0; i < letLen; i++) {
    for(let j = 0; j < letLen; j++) {
      if(j === i) continue;
      for(let k = 0; k < letLen; k++) {
        if(k === i || k === j) continue;
        arr.push(parseInt([selectedDigits[i], selectedDigits[j],selectedDigits[k]].join("")));
      }
    }
  }
  return arr;
}
let ret = ThreeDigitNumbers([1,2,3,4,5]);
console.log(ret.join(" "));
