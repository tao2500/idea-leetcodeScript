// 题目描述
// n 个魔法石围成一个环形，每个魔法石蕴含一定的能量值（整数，可正可负）。
// 选择一段连续的魔法石（至少选择 1 个，可以跨越首尾），收集它们的能量，
// 要求收集的总能量能被 k 整除，且总能量值尽可能大。
// 如果没有满足条件的方案，输出 0。

// 思路: 前缀和 + 哈希表
// 环形数组：复制一倍，寻找最大的连续子段和能被k整除
// 核心：如果 prefixSum[i] % k == prefixSum[j] % k (i > j)，则 arr[j+1...i] 的和能被k整除
function get(arr, n, k) {
    if (k === 0) return 0;

    // 环形数组：复制一倍，最多2n个元素
    const extendedArr = [...arr, ...arr];
    let maxSum = 0;

    // sumMap: key = (前缀和 % k)，value = 第一个出现的前缀和
    // key0的初始值是0，表示前0个元素的前缀和
    const sumMap = new Map();
    sumMap.set(0, 0);
    let prefixSum = 0;

    for (let i = 0; i < 2 * n; i++) {
        prefixSum += extendedArr[i];
        const mod = prefixSum % k;

        if (sumMap.has(mod)) {
            // 找到相同mod，子段和能被k整除
            // sum = 当前前缀和 - 第一个出现的相同mod的前缀和
            // 子段长度 = i - sumMap.get(mod)
            // 环形数组子段长度不能超过n
            const startIndex = sumMap.get(mod);
            const length = i - startIndex;
            if (length < n) {
                const sum = prefixSum - startIndex;
                if (sum > maxSum) maxSum = sum;
            }
        } else {
            // 保存第一次出现的prefixSum
            sumMap.set(mod, prefixSum);
        }
    }

    return maxSum;
}

// 测试用例
// Test1: [1,2,3,4,5] = 15, 15%3=0, 最大子段和15（从索引1到5）
console.log('res', get([1, 2, 3, 4, 5], 5, 3));  // 输出: 15

// Test2: [-1,-2,3] = 0, 0%3=0, 最大子段和0
console.log('res', get([-1, -2, 3], 3, 3));  // 输出: 0

// Test3: [3,-2,5,-1]
// 满足条件的子段和: [3]=3, [3,-2,5]=6, [-2,5]=3
// 最大是6
console.log('res', get([3, -2, 5, -1], 4, 3));  // 输出: 6


// 思路: 动态规划 + 滑动窗口
// 环形数组：复制一倍，寻找最大的连续子段和能被k整除
// 用前缀和+滑动窗口：
// - prefixSum[i] 表示前 i 个元素的和
// - 子段和 = prefixSum[i] - prefixSum[j]，长度 = i - j
// - 条件：i - j < n
// - 维护滑动窗口内最小的 prefixSum[j]
function get(arr, n, k) {
    if (k === 0) return 0;

    // 环形数组：复制一倍，最多2n个元素
    const extendedArr = [...arr, ...arr];
    const prefixSum = new Array(2 * n + 1).fill(0);
    for (let i = 0; i < 2 * n; i++) {
        prefixSum[i + 1] = prefixSum[i] + extendedArr[i];
    }

    let maxSum = 0;
    let minPrefixSum = prefixSum[0]; // 窗口内最小的 prefixSum[j]

    for (let i = 1; i < 2 * n; i++) {
        // 维护滑动窗口：窗口长度不超过 n，即 j >= i - n
        if (i - n >= 0) {
            minPrefixSum = Math.min(minPrefixSum, prefixSum[i - n]);
        }

        // 计算窗口内最大的子段和 = prefixSum[i] - minPrefixSum
        const subSum = prefixSum[i] - minPrefixSum;
        if (subSum % k === 0 && subSum > maxSum) {
            maxSum = subSum;
        }
    }

    return maxSum;
}

// 测试用例
// Test1: [1,2,3,4,5] = 15, 15%3=0, 最大子段和15（从索引1到5）
console.log('res', get([1, 2, 3, 4, 5], 5, 3));  // 输出: 15

// Test2: [-1,-2,3] = 0, 0%3=0, 最大子段和0
console.log('res', get([-1, -2, 3], 3, 3));  // 输出: 0

// Test3: [3,-2,5,-1]
// 满足条件的子段和: [3]=3, [3,-2,5]=6, [-2,5]=3
// 最大是6
console.log('res', get([3, -2, 5, -1], 4, 3));  // 输出: 6


// 反思： 79%
// 1. 数组复制两倍成环
// 2. 动态规划：dp[i] = max(extendedArr[i], dp[i-1] + extendedArr[i])
// 3. 在遍历时检查 dp[i] 能否被 k 整除，记录最大值




// 反思： 79%
// 1. 数组复制两倍成环
// 2. 利用同余性质快速查找子段，如果前缀和的同余相同，说明这两个前缀和之间的之和能被k整除
