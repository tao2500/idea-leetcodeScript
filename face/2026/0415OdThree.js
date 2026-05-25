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
            aa = aa.concat(queue.splice(m.get(avalue), queue.length - m.get(avalue)))
            m.set(avalue, -1);
        } else {
            queue.push(avalue);
            m.set(avalue, queue.length - 1);
        }
        queue.push(avalue)
        const bvalue = bb.shift();
        // 判定是否收牌
        if(m.has(bvalue) && m.get(bvalue) > 0) {
            queue.push(bvalue);
            bb = bb.concat(queue.splice(m.get(bvalue), queue.length - m.get(bvalue)))
            m.set(bvalue, -1);
            console.log('test',bvalue, bb)
        } else {
            queue.push(bvalue);
            m.set(bvalue, queue.length - 1);
        }
        // 判定是否收牌
        num ++;
    }
    if(aa.length === 0 && bb.length > 0) {
        return bb.shift()
    }
    if (bb.length === 0 && aa.length > 0) {
        return aa.shift()
    }
    return 0
}

console.log('res', game(a, b));