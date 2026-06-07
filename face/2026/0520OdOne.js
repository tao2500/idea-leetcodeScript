// 小学英语老师批改作文。题目描述
// 你是一名小学英语老师，正在批改学生的英语作文。由于学生在书写单词时常常会出现一些小问题，
// 比如多余的空格，作文批改过程中需要纠正问题，包括前后多余空格去除，中间重复的空格应该删除多余空格，
// 单词间最多只保留一个空格。 为了简化查找过程，重复字符比较忽略字符大小写，am 等于 Am、AM 和 aM。

// 输入描述
// 输入一个仅包含 ASCII 字符的文本字符串 story

// 输出描述
// 请你找出批改后的作文中，最长的不包含重复字符的子串长度。

// 约束
// 0≤story.length≤1000

// story 仅包含 ASCII 字符（0-127）。

// 示例1
// 输入
// Hello World!

// 输出
// 7

// 说明
// 最长子串为 World!，长度为 7。

// 示例2
// 输入
// hi,  jIn

// 输出
// 5

// 说明
// 先对空格和大小写做处理，输入串等价为 Hi, Jin，最长子串是 ", Jin"，长度为5

const props = 'Hello,, World!';

// 格式化字符串
function getString (s) {
    // 去除多余空格， ,只保留后面一个空格。单次间只保留一个空格
    let res = s;
    // console.log('test', res.length, res[5].charCodeAt(), res[6].charCodeAt())
    for(let i = 0; i < res.length; i++) {
        if(res[i].charCodeAt() === 44) {
            // 如果是「,」 删除前面的空格以及「,」。
            if(res[i - 1] === 44 || res[i - 1] === 32) {
                res = res.slice(0, i - 1) + res.slice(i, res.length)
            }
            // 如果后面还是,  删除,
            if(res[i + 1].charCodeAt() === 44) {
                res = res.slice(0, i) + res.slice(i + 1, res.length)
            }
            // 如果后面不是空格，加一个空格
            if(res[i + 1].charCodeAt() !== 32) {
                res = res.slice(0, i + 1) + String.fromCharCode(32) + res.slice(i + 1, res.length);
            }
        } else if (res[i].charCodeAt() === 32) {
            // 如果是空格，删除前面多余的空格
            if(res[i - 1] === 32) {
                res = res.slice(0, i - 1) + res.slice(i, res.length)
            }
        }
    }
    return res;
}
function getTarget(p) {
    // idea: 队列，先去除多余空格。然后加入相同元素后，记录最大长度。然后出队列直到推出与右指针相同的字符
    const res = getString(p)
    // console.log('res', res.length)
    let l = 0, r = 0;
    // console.log(res)
    let retu = '', queue = [];
    for (let i = 0; i < res.length; i++) {
        if(!queue.includes(res[i])) {
            queue.push(res[i])
        } else {
            // console.log('test', res[i], queue, retu)
            const maxLen = Math.max(retu.length, queue.length);
            if (maxLen !== retu.length) retu = queue.join('');
            const index = queue.indexOf(res[i])
            // console.log('test1', index)
            queue = queue.slice(index + 1, queue.length)
            // console.log('test2', queue)
            queue.push(res[i])
        }
    }
    const maxLen = Math.max(retu.length, queue.length);
    if (maxLen !== retu.length) retu = queue.join('');
    return retu;
}

console.log(getTarget(props).length)

// 算法得分：65.00 / 100   