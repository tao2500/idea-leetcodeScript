// 等距二进制判断。题目描述
// 对于一个二进制数，我们定义相邻两个 1 之间 0 的数量为他们两个之间的距离，
// 如 1001011，相邻两个 1 之间的距离从左到右分别为 2、1、0。

// 现在如果一个整数转化为二进制数满足如下条件：
// 包含不少于 3 个 1
// 所有相邻数字 1 之间的距离相同 我们称之为等距二进制，如 2121（二进制为：1010110101）、
// 6060（二进制为：111100111100）、146146（二进制为：1001001010010010）。
// 输入描述
// 现给定一个输入，整数 0 <= n < (2^31 - 1)

// 输出描述
// 如果 n 是等距二进制，请输出它的距离，如果不是等距二进制，请输出 -1

// 示例1
// 输入
// 21
// 输出
// 1
// 说明
// 二进制为 10101，距离为 1

// 示例2
// 输入
// 60
// 输出
// 0
// 说明
// 二进制为 111100111100，距离为 0

// 示例3
// 输入
// 146
// 输出
// 2
// 说明

// 二进制为 10010010，距离为 2
// 示例4
// 输入
// 2
// 输出

// -1
// 说明
// 二进制为 10，不满足条件 1，非等距二进制


const props = 146;

function getTarget(p) {
    const two =  p.toString(2).toString();
    let oneCont = 0;
    for(let i = 0; i < two.length && oneCont < 3; i++) {
        if(two[i] === '1') {
            oneCont = oneCont + 1;
        }
    }
    // console.log('test', two, oneCont)
    if(oneCont < 3) return -1
    let len = 0;
    let starCont = 0;
     for(let i = 0; i < two.length; i++) {
        // console.log('1', i)
        if(two[i] === '1') {
            const newLen = i - starCont
            if (len === 0) len = newLen;
            if(newLen !== len) {
                return -1;
            }
            starCont = i
            // console.log('test1', starCont, newLen, i)
        }
     }
     return len - 1
}

console.log(getTarget(props))

算法得分：80.65 / 100 