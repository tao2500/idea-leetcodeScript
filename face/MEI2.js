// 1. 小美考试，平均分大于90
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
  // idea：模拟
  let line = await readline();
  let tokens = line.split(' ');
  // 已考试次数
  let count = parseInt(tokens[0]);
  line = await readline();
  // 成绩数组
  let arr = line.split(' ');
  // 计算总成绩
  let sum = 0;
  for(let i of arr) {
    sum += parseInt(i);
  }
  // 还需参加的次数（贪心，每次都满分）
  let joinCount = 0;
  while(sum / count++ < 90) {
    sum += 100;
    joinCount++;
  }
  console.log(joinCount);
}()

// 2. 给定01串修改k次，可以删除俩相邻且相同串，求剩余的最大价值（串长度）
const rl = require("readline").createInterface({ input: process.stdin });
var iter = rl[Symbol.asyncIterator]();
const readline = async () => (await iter.next()).value;

void async function () {
  // idea1：贪心()，比较两个数，若不同则跳过，若相同则改为不同，后续k !== 0,则价值减少 2 * |k|（err，全0、全1）
  // idea2：逆向思维，先寻找最长连续子数组长度，计算将其有价值化所需的转化次数Math.floor(len / 2)，若 k > 所需次数，则能全部有价值化，否则只能部分价值化（沿用idea1，让k可以为负数，最后减去 2 * |k|即可）
  // idea3：动态规划
  let line = await readline();
  let tokens = line.split(' ');
  // 记录字符串长度及要求修改的次数
  let len = parseInt(tokens[0]), k = parseInt(tokens[1]);
  line = await readline();
  // 现有01串
  let arr = line.split('');
  // 相同连续区间
  let l = 0, r = 1
  while (r <= len) {
    if (arr[r] !== arr[r - 1]) {
      // 将连续相同的串价值化（差异化）
      const length = r - l;
      if (length > 1) {
        k -= Math.floor(length / 2);
      }
      l = r;
    }
    r++;
  }
  console.log(len - Math.abs(k) * 2);
}()

