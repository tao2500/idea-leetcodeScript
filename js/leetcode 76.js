/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
// idea1：如果t的长度大于s则返回“”，同时利用map记录t中元素的种类与个数，先循环遍历s查找第一个存在于t中的字符，以该字符为滑动窗口首字符，继续寻找第二个存在于map中的字符....直至寻找到所有字符，记录该字符串，同时继续遍历查找是否有更短的结果...
minWindow("aaaaaaaaaaaabbbbbcdd", "abcdd");
function minWindow (s, t) {
  // s字符串的长度
  let slen = s.length;
  if(slen < t.length) return "";
  // t中字符的种类及个数
  let tmap = new Map();
  // 记录滑动窗口中的字符及其个数
  let winmap = new Map();
  // 创建滑动窗口的左右指针
  let l = 0, r = -1;
  // 当前找到的最优返回结果
  let retu = "";
  // 获取t中字符的种类及个数
  for(let s of t){
    tmap.set(s, tmap.get(s) ? tmap.get(s) + 1 : 1);
  }
  console.log(tmap);
  // 开始遍历字符串s
  for(let i = 0; i < slen; i++){
    // 当前字符进入滑动窗口
    r = i;
    winmap.set(s[i], winmap.get(s[i]) > 0 ? winmap.get(s[i]) + 1 : 1);
    // 检查是否已经覆盖t中所有字符
    while(check()){
      let newRetu = s.slice(l, r + 1);
      // 如果当前解更优
      if(newRetu.length < retu.length || retu.length === 0) retu = newRetu;
      // 开始移动滑动窗口左侧，直至不覆盖t中所有字符
      // 滑动窗口头部移除一个元素
      winmap.set(s[l], winmap.get(s[l]) > 1 ? winmap.get(s[l]) - 1 : -1);
      l++;
    }
  }
  console.log("结果" + retu);
  return retu;

  // 检查滑动窗口map是否已经包含t所含字符map
  function check(){
    for(let [k, v] of tmap){
      // 如果滑动窗口中t指定字符或字符个数不够，则不满足条件
      // console.log("查找tmap中"+ k + "="+ v + ",winmap中 = " + winmap.get(k));
      if(winmap.get(k) < v || winmap.get(k) === undefined) return false;
    }
    return true;
  }
}
