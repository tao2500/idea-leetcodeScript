// 有一个键盘有2个按键失灵了，按下这些键时会连续输出其他键对应的字符两次。具体如下:
// 1.按下j键一次，屏幕上显示uu(两个连续的u); 按下b键一次，屏幕上显示tt(两个连续的t)
// 2.u键和t键是好的，按下u键一次时，屏幕只会显示一次u(正常按键);按下t键一次时，屏幕只会
// 显示一次t(正常按键)3.假定屏幕上连续显示两个t一定是按了一次b键，而不是两次t键;假定按键t之后不会紧接着按键b，即t转义为两个b，而不可能是
// tbt;u和j同样适用该规则
// 4.其它按键也都正常工作为了方便维修，给定一串屏幕上输出的字符串，维修师傅要求按照按键次数降序输出，次数相同的按键按照对应字符的升序排序(失
// 灵按键以原对应字符来排序)，只统计按键次数大于0的按键。
// 同时维修师傅要求输出时需要进行一次转义(字符映射)，规则如下:
// 1.按键0~9，直接以数字0~9进行输出
// 2.按键a~z，以10~35进行输出
// 输入描述
// -个字符串s，只包含小写字母和数字，s的长度不超过500(s中不包含b和j字母)
// 输出描述(按键转义后的值，按键次数)构成结果对，所有按键的结果对按照按键次数降序排列(输出实际是二维数组，第二维固定长度2)。
// 补充说明
// 按键范围只包括:小写字母a~z和数字0~9。转义表:
// 0'->0,'1->1,...'9'->9
// a'-> 10,b-> 11..,Z'-> 35
// 示例1:
// 输入:aauutthello
// 输出:[10,2],[21,2]...

const a = "aauutthello11";

function getCode(char) {
  if (!isNaN(parseInt(char))) return parseInt(char);
  return char.charCodeAt() - 87;
}

function res(input) {
  const target = [];
  const m = new Map();
  let i = 0;

  while (i < input.length) {
    // 检查是否是故障键产生的重复字符（只有uu和tt是故障键）
    if (i < input.length - 1 && input[i] === input[i + 1] && (input[i] === 'u' || input[i] === 't')) {
      // uu来自j键，tt来自b键
      const char = input[i] === 'u' ? 'j' : 'b';

      if (m.has(char)) {
        const indexx = m.get(char);
        target[indexx] = [target[indexx][0], target[indexx][1] + 1];
      } else {
        m.set(char, target.length);
        target.push([getCode(char), 1]);
      }
      i += 2; // 跳过两个字符
    } else {
      // 正常字符，包括重复的非故障字符
      const char = input[i];

      if (m.has(char)) {
        const indexx = m.get(char);
        target[indexx] = [target[indexx][0], target[indexx][1] + 1];
      } else {
        m.set(char, target.length);
        target.push([getCode(char), 1]);
      }
      i++;
    }
  }

  // 按次数降序排序，次数相同时按键值升序
  return target.sort((a, b) => {
    if (b[1] !== a[1]) {
      return b[1] - a[1];
    }
    return a[0] - b[0];
  });
}

console.log("res", res(a));

// 测试用例
function test() {
  let score = 0;
  let totalTests = 0;

  // 测试1: 基础用例 aauutthello
  totalTests++;
  const test1Input = "aauutthello";
  const result1 = res(test1Input);
  // a:2, uu->j:1, tt->b:1, h:1, e:1, ll:2, o:1
  // 实际统计: a:2, l:2, j:1, b:1, h:1, e:1, o:1
  // 按次数降序，次数相同时按键值升序
  // 次数2: a(10), l(21) -> a, l
  // 次数1: b(11), e(14), h(17), j(19), o(24) -> b, e, h, j, o
  const expected1 = [[10, 2], [21, 2], [11, 1], [14, 1], [17, 1], [19, 1], [24, 1]];

  let pass1 = result1.length === expected1.length;
  if (pass1) {
    for (let i = 0; i < result1.length; i++) {
      if (result1[i][0] !== expected1[i][0] || result1[i][1] !== expected1[i][1]) {
        pass1 = false;
        break;
      }
    }
  }

  if (pass1) {
    score += 25;
    console.log('测试1通过: 基础用例 aauutthello');
  } else {
    console.log('测试1失败: 基础用例 aauutthello');
    console.log('期望:', expected1);
    console.log('实际:', result1);
  }

  // 测试2: 包含数字
  totalTests++;
  const test2Input = "a11tt22";
  const result2 = res(test2Input);
  // a:1, 1:2, tt->b:1, 2:2
  // 按次数降序，次数相同时按键值升序
  // 次数2: 1(1), 2(2) -> 1, 2
  // 次数1: a(10), b(11) -> a, b
  const expected2 = [[1, 2], [2, 2], [10, 1], [11, 1]];

  let pass2 = result2.length === expected2.length;
  if (pass2) {
    for (let i = 0; i < result2.length; i++) {
      if (result2[i][0] !== expected2[i][0] || result2[i][1] !== expected2[i][1]) {
        pass2 = false;
        break;
      }
    }
  }

  if (pass2) {
    score += 25;
    console.log('测试2通过: 包含数字');
  } else {
    console.log('测试2失败: 包含数字');
    console.log('期望:', expected2);
    console.log('实际:', result2);
  }

  // 测试3: 只有正常字符
  totalTests++;
  const test3Input = "abcdef";
  const result3 = res(test3Input);
  // 每个字符都只出现一次
  const expected3 = [[10, 1], [11, 1], [12, 1], [13, 1], [14, 1], [15, 1]];

  let pass3 = result3.length === expected3.length;
  if (pass3) {
    for (let i = 0; i < result3.length; i++) {
      if (result3[i][0] !== expected3[i][0] || result3[i][1] !== expected3[i][1]) {
        pass3 = false;
        break;
      }
    }
  }

  if (pass3) {
    score += 25;
    console.log('测试3通过: 只有正常字符');
  } else {
    console.log('测试3失败: 只有正常字符');
    console.log('期望:', expected3);
    console.log('实际:', result3);
  }

  // 测试4: 连续多个故障键
  totalTests++;
  const test4Input = "uuuttthee";
  const result4 = res(test4Input);
  // uu->j:1, u(单个):1, tt->b:1, t(单个):1, h:1, ee->e:2
  // 统计: j:1, u:1, b:1, t:1, h:1, e:2
  // 按次数降序，次数相同时按键值升序
  // 次数2: e(14)
  // 次数1: b(11), h(17), j(19), t(29), u(30) -> b, h, j, t, u
  const expected4 = [[14, 2], [11, 1], [17, 1], [19, 1], [29, 1], [30, 1]];

  let pass4 = result4.length === expected4.length;
  if (pass4) {
    for (let i = 0; i < result4.length; i++) {
      if (result4[i][0] !== expected4[i][0] || result4[i][1] !== expected4[i][1]) {
        pass4 = false;
        break;
      }
    }
  }

  if (pass4) {
    score += 25;
    console.log('测试4通过: 连续多个故障键');
  } else {
    console.log('测试4失败: 连续多个故障键');
    console.log('期望:', expected4);
    console.log('实际:', result4);
  }

  console.log(`\n总分: ${score}/100`);
  return score;
}

test();
