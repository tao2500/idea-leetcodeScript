// 某微服务系统的日志监控平台需要分析AP调用记录。日志中包含大量重复的请求记录，为了优化存储和后续分析，需要对相邻的重复请求进行合并统计。
// 具体规则如下:
// 1.日志按时间顺序排列，每条记录包含请求路径和响应时间
// 2.如果连续出现相同的请求路径，需要将这些记录合并为一条
// 3.合并后的记录需要统计该路径连续出现的次数，并保留所有响应时间的平均值
// 4.相同路径但被其他路径分隔的，视为不同的记录组,需要分别合并请实现一个函数，对给定的日志数据进行去重合并处理。
// 输入描述 输入请求路径path数组，按时间顺序排列输入对应的响应时间responseTimes数组(毫秒)补充
// Ospaths.length≤10^5
// OsresponseTimes.lengths10^5
// paths.length==response Times.length1sresponseTimes[i]s10^4
// 路径长度不超过100个字符
// 输出描述
// 按顺序输出每个记录组信息，每个记录组包含以下三个元素:该路径在输入数组中首次出现索引
// 该路径连续出现的次数
// 该组路径的平均响应时间(向下取整)
// 示例1
// 输入
// lapi/user,/api/user,/api/order,/api/user,/api/order,/api/order100,200,150,300,250,350
// 输出 0,2,150 2,1,150 3,1,300 4,2,300

const Ospaths = ["/api/user","/api/user","/api/order","/api/user","/api/order","/api/order"];
const OsresponseTimes = [100,200,150,300,250,350];
const target = [[0,2,150], [2,1,150], [3,1,300], [4,2,300]];

function res(a, b) {
    let res = [];
    // idea: 单次循环遍历，如果当前路径等于上一路径，更新结果，否则新建结果
    a.forEach((element, index) => {
        if(index === 0) {
            res.push([index, 1, b[index]])
        } else {
            // console.log('test1', a[index], a[index - 1], a[index] == a[index - 1])
            if(a[index] == a[index - 1]) {
                const aa = res[res.length - 1][0];
                const bb = res[res.length - 1][1];
                const cc = res[res.length - 1][2];
                // console.log('test', aa, bb, cc, res)
                res[res.length - 1] = [aa, bb + 1, (bb * cc + b[index]) / (bb + 1)]
            } else {
                res.push([index, 1, b[index]])
            }
        }
    });

    return res;
}

console.log('res', res(Ospaths, OsresponseTimes))

// 测试用例
function test() {
    let score = 0;
    let totalTests = 0;

    // 测试1: 基础用例
    totalTests++;
    const test1Paths = ["/api/user","/api/user","/api/order","/api/user","/api/order","/api/order"];
    const test1Times = [100,200,150,300,250,350];
    const expected1 = [[0,2,150], [2,1,150], [3,1,300], [4,2,300]];
    const result1 = res(test1Paths, test1Times);

    let pass1 = true;
    if (result1.length !== expected1.length) pass1 = false;
    else {
        for (let i = 0; i < result1.length; i++) {
            if (result1[i][0] !== expected1[i][0] ||
                result1[i][1] !== expected1[i][1] ||
                Math.floor(result1[i][2]) !== expected1[i][2]) {
                pass1 = false;
                break;
            }
        }
    }

    if (pass1) {
        score += 25;
        console.log('测试1通过: 基础用例');
    } else {
        console.log('测试1失败: 基础用例');
        console.log('期望:', expected1);
        console.log('实际:', result1.map(r => [r[0], r[1], Math.floor(r[2])]));
    }

    // 测试2: 全部相同路径
    totalTests++;
    const test2Paths = ["/api/test","/api/test","/api/test"];
    const test2Times = [100,200,300];
    const expected2 = [[0,3,200]];
    const result2 = res(test2Paths, test2Times);

    let pass2 = result2.length === 1 &&
                result2[0][0] === 0 &&
                result2[0][1] === 3 &&
                Math.floor(result2[0][2]) === 200;

    if (pass2) {
        score += 25;
        console.log('测试2通过: 全部相同路径');
    } else {
        console.log('测试2失败: 全部相同路径');
        console.log('期望:', expected2);
        console.log('实际:', result2.map(r => [r[0], r[1], Math.floor(r[2])]));
    }

    // 测试3: 全部不同路径
    totalTests++;
    const test3Paths = ["/api/a","/api/b","/api/c"];
    const test3Times = [100,200,300];
    const expected3 = [[0,1,100], [1,1,200], [2,1,300]];
    const result3 = res(test3Paths, test3Times);

    let pass3 = true;
    if (result3.length !== expected3.length) pass3 = false;
    else {
        for (let i = 0; i < result3.length; i++) {
            if (result3[i][0] !== expected3[i][0] ||
                result3[i][1] !== expected3[i][1] ||
                Math.floor(result3[i][2]) !== expected3[i][2]) {
                pass3 = false;
                break;
            }
        }
    }

    if (pass3) {
        score += 25;
        console.log('测试3通过: 全部不同路径');
    } else {
        console.log('测试3失败: 全部不同路径');
        console.log('期望:', expected3);
        console.log('实际:', result3.map(r => [r[0], r[1], Math.floor(r[2])]));
    }

    // 测试4: 单个元素
    totalTests++;
    const test4Paths = ["/api/single"];
    const test4Times = [150];
    const expected4 = [[0,1,150]];
    const result4 = res(test4Paths, test4Times);

    let pass4 = result4.length === 1 &&
                result4[0][0] === 0 &&
                result4[0][1] === 1 &&
                Math.floor(result4[0][2]) === 150;

    if (pass4) {
        score += 25;
        console.log('测试4通过: 单个元素');
    } else {
        console.log('测试4失败: 单个元素');
        console.log('期望:', expected4);
        console.log('实际:', result4.map(r => [r[0], r[1], Math.floor(r[2])]));
    }

    console.log(`\n总分: ${score}/100`);
    return score;
}

test();