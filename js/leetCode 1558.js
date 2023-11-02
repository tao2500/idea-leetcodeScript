// idea1：先降序排序，然后取出的第一个数即为最大值，取出该堆中礼物后再从右到左插入排序，继续取出最大...
function pickGifts (gifts, k) {
  let GLen = gifts.length;
  gifts.sort((a, b) => b - a);
  for(let  i = 0; i < k; i ++) {
    console.log(gifts);
    let num = Math.floor(Math.sqrt(gifts.shift()));
    gifts.push(num);
    // 右到左插入排序
    for(let j = GLen - 2; j >= 0; j--) {
      if(gifts[j] >= num) {
        break;
      }else {
        [gifts[j], gifts[j + 1]] = [gifts[j + 1], gifts[j]];
      }
    }
  }
  console.log(gifts);
  // 统计剩余个数
  let ret = gifts.reduce(function(prev, next) {
    return prev + next;
  })
  return ret;
};

console.log(pickGifts([25,64,9,4,100], 4));
