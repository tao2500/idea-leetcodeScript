// // 1.所在位置为【1，1】，给定n行n列只能向上、向右走奇数步，A先行，问A能否稳赢
// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;
//
// void async function () {
//   // idea：依题意其实就是谁能把对方逼入绝路（只能向上或向右走，看能否一步到达右上角,数学归纳，直接算到右上角是奇数步还是要偶数步，奇数步稳赢）
//   let line = await readline();
//   let tokens;
//   while(line = await readline()){
//     tokens = line.split(' ');
//     // 行数、列数
//     let l = parseInt(tokens[0]);
//     let c = parseInt(tokens[1]);
//     // 如果都按每次一步算，还能走L+C-2次
//     (l + c - 2) % 2 === 0 ? console.log('No') : console.log('Yes');
//   }
// }()
//
// // 2.N组数据，正负数之差为其价值，在N组数据中取n组组合，求可能价值的最大值
// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;
//
// void async function () {
//   // idea：贪心法，计算当前帖子的吸引力(正向的吸引力和负向的吸引力)，如果为正数即可加入正向组合，反之加入负向组合，返回组合中吸引力较大者
//   let line = await readline();
//   let tokens = line.split(' ');
//   let count = parseInt(tokens[0]);
//   line = await readline();
//   // 点赞数
//   const up = line.split(' ');
//   line = await readline();
//   // 点踩数
//   const low = line.split(' ');
//   // 总吸引力
//   let upCount = 0;
//   // 当前帖子的吸引力
//   let num;
//   // 计算点赞大于点踩的吸引力
//   for(let i = 0; i < count; i++){
//     num = parseInt(up[i]) - parseInt(low[i]);
//     if(num > 0) upCount += num;
//   }
//   // 计算点踩大于点赞的吸引力
//   let lowCount = 0;
//   for(let i = 0; i < count; i++){
//     num = parseInt(low[i]) - parseInt(up[i]);
//     if(num > 0) lowCount += num;
//   }
//   console.log(Math.max(upCount, lowCount));
// }()
//
//
// // 3. 给定一个长为n的数组，问是否能在一次一下交换的情况下，使得其中k位连续
// const rl = require("readline").createInterface({ input: process.stdin });
// var iter = rl[Symbol.asyncIterator]();
// const readline = async () => (await iter.next()).value;
//
// void async function () {
//   // idea：滑动窗口，若i = i- 1，则加入i，否则记录当前节点为交换点，交换当前元素继续查询，若滑动窗口大小等于k,表示可以满足条件
//   let line = await readline();
//   let tokens = line.split(' ');
//   let n = parseInt(tokens[0]);
//   let k = parseInt(tokens[1]);
//   line = await readline();
//   let arr = line.split(' ');
//   arr.map((v, i, arr) => arr[i] = parseInt(v));
//   // 交换元素的位置
//   let middle = [-1, -1];
//   // 指针模拟滑动窗口
//   let star = 0, end = 1;
//   // 手动处理第一位（初始可能不是1！！！）
//   const min = Math.min(...arr);
//   if(arr[0] !== min) {
//     middle = [0, arr.indexOf(min)];
//     // 交换位置
//     [arr[middle[0]], arr[middle[1]]] = [arr[middle[1]], arr[middle[0]]];
//   }
//   while(end < n) {
//     // 当前位置连续
//     if(arr[end - 1] + 1 === arr[end]){
//       if(end - star + 1 >= k) {
//         // 找到答案
//         console.log("YES");
//         console.log(middle[0] > -1 ? 1 : 0);
//         // 题目计数不从0开始，故+1
//         if(middle[0] > -1) console.log(middle[0] + 1, middle[1] + 1);
//         break;
//       }
//     }else {
//       // 判断是否已经交换过
//       if(middle[0] > -1) {
//         // 当前交换过，star移动到交换位置下一位，继续尝试寻找
//         star = middle[0] + 1;
//         // 恢复位置
//         [arr[middle[0]], arr[middle[1]]] = [arr[middle[1]], arr[middle[0]]];
//         middle = [-1, -1];
//       } else {
//         // 当前没交换过，交换，继续尝试寻找
//         // 待交换目标元素的下标
//         const index = arr.indexOf(end + min);
//         // 交换元素
//         middle = [end, index];
//         // console.log(middle);
//         [arr[middle[0]], arr[middle[1]]] = [arr[middle[1]], arr[middle[0]]];
//         // console.log(arr);
//       }
//     }
//     end++;
//   }
//   // 找到最后都没找到
//   if(end === n) console.log("NO");
// }()
//


// 多选题3 try中break，finally还会执行吗？
while(true) {
  try {
    console.log(1);
    break;
    throw new Error('error');
    console.log(2);
  }catch (e) {
    console.log(3);
    break;
    console.log(4);
  }finally {
    console.log(5);
  }
}


