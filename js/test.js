console.log(typeof ("1"));

console.log(isNumber('2'));
function isNumber(n){
  console.log();
  console.log(!isNaN(n));
  return typeof n === 'number' && !isNaN(n);
}
