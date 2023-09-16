// 1.
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// idea：模拟，遍历数据，当读到的不是数值时依次加入年月日时分秒
// 1. (不一定都包含月日或者分秒？) ac无提升
// 2. (分隔符不一定为‘-’或‘：’) ac无提升
// 3. (还可能输入的是iso时间？)
// 4. (看了网友解答，若月份和日期为1位数，前面去掉0)
void async function () {
  const line = await readline();
  const tokens = line.split(' ');
  // 分别获取日期与时间
  let data = tokens[0].split(''), time = tokens[1].split('');
  const datastack = ["日", "月", "年"], timeState = ["秒", "分", "时"];
  // 转换日期
  for(let i = 0; i < data.length; i++) {
    if(!/[0-9]/g.test(data[i])) data[i] = datastack.pop();
  }
  data.push(datastack.pop());
  data = data.join('');

  // 转换时间
  for(let i = 0; i < time.length; i++) {
    if(!/[0-9]/g.test(time[i])) time[i] = timeState.pop();
  }
  time.push(timeState.pop());
  time = time.join('');
  console.log(data, time);
}()


// 2.
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

// idea1：构造小堆顶，然后取出第k个数
// idea2：排序，然后取出第k个数
void async function () {
  const line = await readline();
  const tokens = line.split(';');
  let arr = eval(tokens[0]), count = parseInt(tokens[1]);
  arr.sort((a, b) => a - b);
  console.log(arr[count - 1]);
}()

//3.
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
  class Store {
    constructor(init) {
      // 记录当前状态
      this.state = init;
      // 订阅者链表
      this.user = [];
    };
    getState() {
      return "Current state:" + this.state;
    };
    setState(newState) {
      this.state = newState;
      return notifyListeners() + newState;
    };
    subscribe(list) {
      this.user = this.user.concat(...list);
    };
    notifyListeners() {
      for(let u of this.user) {
        // 通知用户，调用用户的行动方法
        u.action();
      }
      return "Statechange:";
    }
  }

  let stateManager;
  let line = await readline();
  while(line){
    if(!stateManager){
      stateManager = new Store(eval(line));
    }
    eval(line);
    line = await readline();
  }
  console.log(line);
}()

//
// console.log(
//   /[0-9]/g.test('8')
// )

// console.log();
// let LD = new Date(new Date().toString());
// console.log(LD.getFullYear() + "年" + (LD.getMonth() + 1)  + "月" + LD.getDay() + "日 " + LD.getHours() + "时" + LD.getMinutes() + "分" + LD.getSeconds() + "秒")
