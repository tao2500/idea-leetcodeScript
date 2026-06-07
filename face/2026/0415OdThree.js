// 题目描述:
// 有两名玩家甲和乙，他们玩一种"小猫钓鱼"扑克牌游戏。扑克牌为A、2、3、...、J、Q、K，不考虑花色都用1-13来表示，然后给甲
// 乙两人各发n张牌，按给定顺序排成队列，这些牌背面朝上，正面朝下放置，队列的第一个元素是背面的第一张。
// 游戏规则如下:
// 1.出牌与收牌
//    - 初始出牌时，甲先出牌，打出的牌正面朝上放在桌面的最底部，然后乙出牌，正面朝上放在甲的牌张上面，然后甲乙轮流出牌
//      直到触发收牌或者任意一个玩家牌出完。
//    - 如果玩家出牌后触发了收牌，则把收到的所有牌作为整体翻面后，背面朝上正面朝下放到该玩家手牌的底部，然后当前收牌的玩家继续出牌。
// 2.收牌规则
//    - 若当前打出的牌点数，与桌面上之前某张牌的点数相同，则触发收牌，收牌的范围是两张相同点数牌之间的所有牌(含这两张)。
//    - 若当前打出的牌是J(11)，并且此时桌面上已有至少一张牌(不含当前这张)，则当前玩家触发收牌，收牌的范围是桌面上的所有牌。
//    - 若桌面上原本没有牌，则J仅作为普通牌放到桌面。
// 3.游戏结束条件
//    - 若某位玩家在自己回合开始时已经没有牌可出，则游戏立即结束，如果此时对方还有余牌，则对方获胜，如果对方也无牌，则平局。
//    - 若在模拟过程中，出牌总次数超过一个上限(10000次)仍未结束，则认为游戏进入死循环，判定为平局。
//
// 输入描述
// 甲的初始牌队列和乙的初始牌队列，甲乙初始手牌数量相等，均为整数n(1≤n≤100)
// 输出描述
// 一方获胜时，输出获胜方手中背面朝上最上方的那张牌的数值。若平局，输出0。
//
// 示例1:
// 输入:
// [1, 4, 1]
// [5, 1, 1]
// 输出: 5
// 解释: 甲出牌1，乙出牌5，甲出牌4，乙出牌1(与桌面第一张1相同，乙收牌[1,5,4,1])，甲出牌1，乙出牌1(相同，乙收牌)，甲无牌，乙获胜，输出乙最上方牌5
//
// 示例2:
// 输入:
// [1, 2, 3]
// [4, 5, 6]
// 输出: 0
// 解释: 双方都无法触发收牌，最终都出完牌，平局

const a = [1, 4, 1];
const b = [5, 1, 1];

function win(aa, bb) {
    if(aa.length === 0 && bb.length > 0) {
        return bb.shift()
    }
    if (bb.length === 0 && aa.length > 0) {
        return aa.shift()
    }
} 

function game(a, b) {
    // 桌面上的队列
    const queue = [];
    let num = 0;
    let aa = a;
    let bb = b;
    // 最后一张牌值在桌面中的下标
    const m = new Map();
    while(num < 10000 && aa.length > 0 && bb.length > 0) {
        const avalue = aa.shift();
        // 判定是否收牌
        if(m.has(avalue) && m.get(avalue) > 0) {
            queue.push(avalue);
            aa = aa.concat(queue.splice(m.get(avalue)))
            m.set(avalue, -1);
        } else {
            queue.push(avalue);
            m.set(avalue, queue.length - 1);
        }
        queue.push(avalue)
        const ok1 = win(aa, bb);
        if (ok1) return ok1
        const bvalue = bb.shift();
        // 判定是否收牌
        if(m.has(bvalue) && m.get(bvalue) > 0) {
            queue.push(bvalue);
            bb = bb.concat(queue.splice(m.get(bvalue)))
            m.set(bvalue, -1);
            console.log('test',bvalue, bb)
        } else {
            queue.push(bvalue);
            m.set(bvalue, queue.length - 1);
        }
        const okk = win(aa, bb);
        if (okk) return okk
        // 判定是否收牌
        num ++;
    }
    const ok = win(aa, bb);
    if (ok) return ok
    return 0
}

console.log('res', game(a, b));

// 测试用例
function test() {
    let score = 0;
    let totalTests = 0;

    // 测试1: 基础用例 [1,4,1] vs [5,1,1]
    totalTests++;
    const test1A = [1, 4, 1];
    const test1B = [5, 1, 1];
    const result1 = game([...test1A], [...test1B]);
    // 甲出1，乙出5，甲出4，乙出1(与桌面第一张1相同，乙收牌[1,5,4,1])，甲出1，乙出1(相同，乙收牌)，甲无牌，乙获胜
    // 乙最后手牌: [1] -> 输出1
    const expected1 = 1;

    if (result1 === expected1) {
        score += 25;
        console.log('测试1通过: 基础用例 [1,4,1] vs [5,1,1]');
    } else {
        console.log('测试1失败: 基础用例 [1,4,1] vs [5,1,1]');
        console.log('期望:', expected1);
        console.log('实际:', result1);
    }

    // 测试2: 平局情况 [1,2,3] vs [4,5,6]
    totalTests++;
    const test2A = [1, 2, 3];
    const test2B = [4, 5, 6];
    const result2 = game([...test2A], [...test2B]);
    // 双方都无法触发收牌，最终都出完牌，平局
    const expected2 = 0;

    if (result2 === expected2) {
        score += 25;
        console.log('测试2通过: 平局情况 [1,2,3] vs [4,5,6]');
    } else {
        console.log('测试2失败: 平局情况 [1,2,3] vs [4,5,6]');
        console.log('期望:', expected2);
        console.log('实际:', result2);
    }

    // 测试3: J牌收牌规则
    totalTests++;
    const test3A = [1, 11]; // 1, J
    const test3B = [2, 3];
    const result3 = game([...test3A], [...test3B]);
    // 甲出1，乙出2，甲出J(桌面上有牌，甲收走所有牌[1,2,J])，乙出3，甲无牌，乙获胜
    // 乙最后手牌: [3] -> 输出3
    const expected3 = 3;

    if (result3 === expected3) {
        score += 25;
        console.log('测试3通过: J牌收牌规则 [1,11] vs [2,3]');
    } else {
        console.log('测试3失败: J牌收牌规则 [1,11] vs [2,3]');
        console.log('期望:', expected3);
        console.log('实际:', result3);
    }

    // 测试4: 甲获胜情况
    totalTests++;
    const test4A = [1, 2, 3];
    const test4B = [4, 1, 5];
    const result4 = game([...test4A], [...test4B]);
    // 甲出1，乙出4，甲出2，乙出1(与桌面第一张1相同，乙收牌[1,4,2,1])，甲出3，乙无牌，甲获胜
    // 甲最后手牌: [3] -> 输出3
    const expected4 = 3;

    if (result4 === expected4) {
        score += 25;
        console.log('测试4通过: 甲获胜情况 [1,2,3] vs [4,1,5]');
    } else {
        console.log('测试4失败: 甲获胜情况 [1,2,3] vs [4,1,5]');
        console.log('期望:', expected4);
        console.log('实际:', result4);
    }

    console.log(`\n总分: ${score}/100`);
    return score;
}

test();