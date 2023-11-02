function countPoints (rings) {
  let rNum = rings.length;
  if(rNum < 5) return 0;
  let arr = new Array(10).fill(0).map(() => new Set());
  for (let i = 0; i < rNum; i += 2) {
    arr[parseInt(rings[i + 1])].add(rings[i]);
  }
  let ret = 0;
  for(let i of arr){
    if(i.size === 3) ret++;
  }
  return ret;
};
console.log(countPoints("B0B6G0R6R0R6G9"));
