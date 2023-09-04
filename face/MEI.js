// 1.小美打三国杀玩郭嘉，已知触发技能时打牌的点数，求可能的出牌顺序
void async function () {
  // idea：贪心法，只要前一张打出的卡牌大于当前打出的卡牌即可
  let line = await readline();
  let tokens = line.split(' ');
  // 小美总共触发技能次数
  let nums = parseInt(tokens[0]);
  line = await readline();
  // 触发技能时打出的手牌
  let numsArr = line.split(' ').map((v, indx, arr) => arr[indx] = parseInt(v));
  // 记录还可打出的卡牌数
  let maxCount = 2 * nums;
  // 记录已打出的牌
  let arr = [];
  let nowCount = -1;
  while(numsArr.length > 0 && maxCount > 0) {
    // console.log(numsArr);
    // 取出当前触发技能的牌点数
    nowCount = numsArr.shift();
    // 如果当前牌点数已经小于上一张
    if(nowCount < arr[arr.length - 1]) {
      // 直接打出
      arr.push(nowCount);
      maxCount--;
    }else {
      // 先打出一张比起大的牌，再打出当前手牌
      arr.push(nowCount + 1);
      arr.push(nowCount);
      maxCount -= 2;
    }
  }

  console.log(arr.length);
  console.log(arr.join(' '));
}()
// 2.小美吃彩虹糖，一天吃两颗，当吃的组合不同时小美就会happy，给出现有彩虹糖，求最happy天数
void async function () {
  // idea1：暴力法，利用set记录已经开心过的组合，然后双循环
  // idea2：idea1的优化,用数组模拟队列，每次取两个比较，若可以happy则不再入队且happy++；否则进入队尾
  let line = await readline();
  let tokens = line.split(' ');
  // 彩虹糖个数
  const num = parseInt(tokens[0]);
  line = await readline();
  tokens = line.split(' ');
  // 现有彩虹糖
  let arr = [...tokens].map((v, indx, arr) => arr[indx] = parseInt(v));
  // 记录可能的开心天数
  let happyDay = 0;
  // 昨天吃完后剩余彩虹糖的数量
  let arrLen = 100001;
  // 已经吃过的组合
  const set = new Set();

  // 如果还有糖果，则继续吃
  while(arr.length > 1){
    // 上一轮有happy过
    while (arr.length < arrLen) {
      arrLen = arr.length;
      console.log(arr);
      let x = arr.shift();
      let y = arr.shift();
      if (set.has([x, y]) || set.has([y, x])) {
        // 把第二颗糖移动到队列末尾，最大可能确保以后不会再吃到这个组合
        arr.push(y);
        arr.unshift(x);
      } else {
        set.add([x, y]);
        happyDay++;
        break;
      }
    }
    // 找不到开心组合了(本轮还没开心的吃到糖)，只能忍痛吃掉两颗
    if(arr.length === arrLen && arr.length > 0) {
      arr.shift();
      arr.shift();
    }
  }

  // 当全部可以吃完时会触发else，happyDay多了一天
  console.log(arr.length > 0 ? happyDay : --happyDay);
}()
