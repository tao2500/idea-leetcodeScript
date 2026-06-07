// 测试用例：小学英语老师批改作文问题
// 功能：找出批改后的作文中，最长的不包含重复字符的子串长度

import fs from 'fs';

// 从原文件读取函数定义
const fileContent = fs.readFileSync('./face/2026/0520OdOne.js', 'utf-8');

// 提取 getString 函数体
const getStringMatch = fileContent.match(/function getString\s*\(s\)\s*\{[\s\S]*?\n\s*\}/);
const getStringBody = getStringMatch[0].replace(/function getString\s*\(s\)\s*\{/, '').replace(/\}\s*$/, '');

// 提取 getTarget 函数体
const getTargetMatch = fileContent.match(/function getTarget\s*\(p\)\s*\{[\s\S]*?\n\s*\}/);
const getTargetBody = getTargetMatch[0].replace(/function getTarget\s*\(p\)\s*\{/, '').replace(/\}\s*$/, '');

// 创建函数
const getString = new Function('s', getStringBody);
const getTarget = new Function('p', getTargetBody);

// 测试用例数组，每个元素包含：输入、期望输出、描述
const testCases = [
    {
        input: "Hello World!",
        expected: 7,
        description: "示例1：最长子串为 World!，长度为7"
    },
    {
        input: "hi,  jIn",
        expected: 5,
        description: "示例2：处理后为 Hi, Jin，最长子串为 ', Jin'，长度为5"
    },
    {
        input: "abc",
        expected: 3,
        description: "无重复字符，全串都是最长子串"
    },
    {
        input: "aabbcc",
        expected: 2,
        description: "每个字符最多出现两次，最长无重复子串长度为2"
    },
    {
        input: "abcdefg",
        expected: 7,
        description: "全串无重复字符"
    },
    {
        input: "abcaefg",
        expected: 5,
        description: "遇到第一个a时，最长子串为 bcaefg，长度为5"
    },
    {
        input: "",
        expected: 0,
        description: "空字符串，长度为0"
    },
    {
        input: "a",
        expected: 1,
        description: "单个字符"
    },
    {
        input: "aaaaaaaaaa",
        expected: 1,
        description: "所有字符相同，最长子串长度为1"
    },
    {
        input: "Hello   World",
        expected: 11,
        description: "多个空格，处理后为 Hello World，最长子串为 Hello World，长度为11"
    },
    {
        input: "Hello,, World!",
        expected: 8,
        description: "两个逗号，处理为 Hello, World!，最长子串为 Hello World!，长度为8"
    }
];

// 执行测试
let passed = 0;
let failed = 0;
let testResults = [];

console.log("=".repeat(60));
console.log("测试用例执行结果");
console.log("=".repeat(60));

for (let i = 0; i < testCases.length; i++) {
    const testCase = testCases[i];
    const result = getTarget(testCase.input);
    const passedTest = result === testCase.expected;
    const status = passedTest ? "✓ PASS" : "✗ FAIL";

    if (passedTest) passed++;
    else failed++;

    testResults.push({
        index: i + 1,
        input: testCase.input,
        expected: testCase.expected,
        result: result,
        passed: passedTest,
        description: testCase.description
    });

    console.log(`\n测试 ${testCase.index}: ${status}`);
    console.log(`描述: ${testCase.description}`);
    console.log(`输入: "${testCase.input}"`);
    console.log(`期望: ${testCase.expected}, 实际: ${result}`);
}

console.log("\n" + "=".repeat(60));
console.log(`通过: ${passed}/${testCases.length} (${(passed / testCases.length * 100).toFixed(2)}%)`);
console.log(`失败: ${failed}/${testCases.length} (${(failed / testCases.length * 100).toFixed(2)}%)`);

const score = (passed / testCases.length) * 100;
console.log(`\n算法得分: ${score.toFixed(2)} / 100`);

if (failed > 0) {
    console.log("\n" + "=".repeat(60));
    console.log("失败测试详情");
    testResults.filter(r => !r.passed).forEach(r => {
        console.log(`\n测试 ${r.index}:`);
        console.log(`输入: "${r.input}"`);
        console.log(`期望: ${r.expected}, 实际: ${r.result}`);
    });
}

fs.writeFileSync('./face/2026/0520OdOne.test-report.json', JSON.stringify({
    total: testCases.length,
    passed,
    failed,
    score: score.toFixed(2),
    testResults
}, null, 2));
console.log("\n测试报告已保存到: face/2026/0520OdOne.test-report.json");
