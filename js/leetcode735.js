asteroidCollision([7,-1,2,-3,-6,-6,-6,4,10,2]);
function asteroidCollision(asteroids){
  // 标记位，标记当前行星前面是否有正数
  let havePosition = false;
  for(let i = 0; i < asteroids.length; i++){
    // 当前行星向右移动时
    if(asteroids[i] > 0){
      havePosition = true;
    }else{
      // 当前行星向左移动且左侧有向右移动的行星
      if(havePosition){
        console.log("<0" + havePosition + "||"+ arguments[(i - 1)] + "||" + (i-1));
        while(asteroids[i - 1] > 0){
          // 如果右侧行星质量大于当前行星
          if(asteroids[i - 1] > Math.abs(asteroids[i])){
            // 当前行星毁灭、左侧行星不变,继续寻找下一个行星
            console.log("当前行星"+asteroids[i]+"毁灭" + asteroids);
            asteroids.splice(i, 1);
            console.log(asteroids);
            i--;
            break;
          }else if(asteroids[i - 1] === Math.abs(asteroids[i])){
            // 俩行星质量相等，碰撞后都毁灭
            asteroids.splice(i - 1, 2);
            i -= 2;
            if(asteroids[i] < 0) havePosition = false;
            break;
          }else{
            // 左侧行星毁灭，如果左侧行星全部毁灭则havePosition = false;
            asteroids.splice(i - 1, 1);
            i--;
            if(asteroids[i - 1] < 0) havePosition = false;
          }

        }
      }
      // 如果左侧没有向右的行星(正数)则不会发生碰撞
    }
  }
  return asteroids;
};
