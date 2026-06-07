// 题目描述
//  企业的组织架构 以树形结构表示，每个节点包含：
//  left: 左子部门（第一个子部门）
//  right: 右子部门（第二个子部门）
//  为了优化管理结构，实现扁平化管理，需要计算企业的最大管理层级深度。 请计算企业的部门层级的最大深度。

//注意
//  1、一个部门最多能有 2 个直属的子部门（二叉树）；
//  2、输入由数字和特殊符号#组成的序列，总结点数不超过 1024 个。
//  数字表示该位置有子部门，#表示该位置无子部门（即无此节点）。

// 输入描述
// 输入由数字和特殊符号#组成的序列
// 输出描述
// 最大层级深度

// 示例1
// 输入 1,#,2,#,3,#,4,#,5
// 输出
// 5

// 说明
// 单链结构，深度为5

// idea: 下一层的广度一定是上一层节点数的两倍

const list = [1, "#", 2, "#", 3, "#", 4, "#", 5];

function getDeep() {
  // 前置空树判断
  if (list.length === 0 || list[0] === "#") return -1;
  // 层级
  let res = 0;
  // 下一层的节点队列
  let l = [];
  let nexDeepLength = 1;
  // 当前遍历到的节点
  let index = 0;
  while (index < list.length || nexDeepLength !== 0) {
    // 当前层遍历完了，进入下一层 深度+1
    if (nexDeepLength === 0) {
      res += 1;
      nexDeepLength = l.length * 2;
      l = [];
    } else {
      nexDeepLength -= 1;
      if (list[index] !== "#") {
        l.push(list[index]);
        console.log("list", l, nexDeepLength);
      }
      index += 1;
    }
  }
  // 当前层遍历完了，进入下一层 深度+1
  if (nexDeepLength === 0) {
    res += 1;
    nexDeepLength = l.length * 2;
    l = [];
  }
  return res;
}

console.log("return", getDeep());


// 97%， 反思：
// 1. 特殊场景是否考虑到了？ 只有‘#’，以‘#’结尾？


