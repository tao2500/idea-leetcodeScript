// 多模型版本的最优调度

// 题目描述
// 在大语言模型推理服务中，有多个不同大小的模型版本可供选择。每个模型版本有不同的准确率和推理延迟。
// 给定查询次数 N 和总时间预算 T，为每个查询选择一个模型版本，使得在不超过时间预算的前提下，总准确率最大。

// 输入描述
// 查询次数 N
// 总时间预算 T
// 模型准确率 accuracy[i]
// 模型延迟 latency[i]
// 输出描述
// 最大总准确率

// 补充说明
// 同一个模型可以被多次选择
// 0< 查询数量 N <= 10
// 0< 总时间预算 T < 100
// 0< 准确率 accuracy[i] <100，表示多个百分点
// 0< 延迟 latency[i] < 20
// 0< 模型版本数量 <= 10
// 可以考虑采用递归方法完成
// 必须查满 N 次

// 示例1
// 输入
// 2,4,{80, 90, 95},{1,2,3}
// 输出
// 180
// 说明
// 最优选择为选取两个准确率为 90 的模型，总耗时为 4，总准确率为 180。

// 示例2
// 输入
// 2,2,{80, 90, 95},{2,2,3}
// 输出
// 0
// 说明
// 到要求的 2 个模型，因此总准确率为 0

const count = 2;
const time = 4;
const accuracy = [80, 90, 95];
const latency = [1, 2, 3];

// 当前最大收益
let maxMeny = 0;
// 当前收益
let meny = 0;
// 当前深度
let diff = 0;
function dfs(time, accuracy, latency) {
  diff = diff + 1;
  if (diff > count) {
    // console.log('test', diff)
    diff = diff - 1;
    return 
  }
//    console.log('test1', diff, count, time, latency)
  // 当前选中第几个模型
  for (let i = 0; i < accuracy.length; i++) {
    if (time - latency[i] < 0) {
        // 不满足条件 推出
        diff = diff - 1;
    } else {
        meny += accuracy[i]
        if(diff === count) {
            // console.log('test 2', diff)
            maxMeny = Math.max(maxMeny, meny)
        }
        dfs(time - latency[i], accuracy, latency)
        meny -= accuracy[i]
    }
  }
  diff = diff - 1;
}

function getTarget(count, time, accuracy, latency) {
  // 计算选择完的最小花销
  const a = [...latency].sort((a, b) => a - b)[0];
  // 不可能走完
  if (count * a > time) return 0;
  // 递归，分别尝试取第一台、第二台....  记录最大收益
  dfs(time, accuracy, latency);
  return maxMeny;
}

console.log(getTarget(count, time, accuracy, latency));

// 算法得分：10.00 / 100 