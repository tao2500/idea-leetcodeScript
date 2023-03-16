findPoisonedDuration([1, 2], 2);
function findPoisonedDuration (timeSeries, duration) {
  let second = 0;
  for(let i of timeSeries){
    let oldTime = second;
    // 遍历中毒时段
    let time = i + duration - 1;
    for(let j = i + 1; j <= time; j++){
      // 在中毒时段又受到攻击
      console.log(j);
      if(timeSeries.includes(j)){
        console.log("再次被攻击");
        second += j - i;
        break;
      }
    }
    // 如果中毒时段内没有再次被攻击
    if(oldTime === second){
      second += duration;
    }
  }
  console.log(second);
  return second;
};
