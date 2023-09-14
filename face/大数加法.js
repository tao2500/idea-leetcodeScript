// 2222222222222222222222222 加上 3333333333333333333333333
// 5555555555555555555555555
function add(a, b) {
  let arrA = a.toString().split('').reverse();
  let arrB = b.toString().split('').reverse();
  let result = [];
  let len = Math.max(arrA.length, arrB.length);
  for (let i = 0; i < len; i++) {
    let sum = (parseInt(arrA[i]) || 0) + (parseInt(arrB[i]) || 0);
    if (result[i]) {
      result[i] += sum;
    } else {
      result[i] = sum;
    }
    if (result[i] >= 10) {
      result[i] -= 10;
      result[i + 1] = 1;
    }
  }
  return result.reverse().join('');
}

console.log(add(123456, 654321));
