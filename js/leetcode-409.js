/**
 * @param {string} s
 * @return {number}
 */
longestPalindrome("civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth");
function longestPalindrome (s) {
  // 回文子串即从左往右读跟从右往左读一样
  // 判断：循环查找有多少种字符及他们各有多少个
  // 最终结果为偶数个的字符中间夹一个最长奇数的串的长度
  let map = new Map();
  // 构建返回的回文子串
  let retu = "";
  // 最长的奇数及个数
  let char = '';
  let num = 0;
  // 获取各字符为键以及字符的个数
  for (let i = 0; i < s.length; i++) {
    map.set(s[i], map.get(s[i])? map.get(s[i]) + 1 : 1);
  }
  for (let [key, val] of map.entries()) {
    // 偶数
    if (val % 2 === 0) {
      if (retu.length === 0) {
        retu += new Array(val + 1).join(key);
      } else {
        // 左右各插入一半
        retu = new Array(Math.floor(val / 2) + 1).join(key) + retu;
        retu += new Array(Math.floor(val / 2) + 1).join(key)
      }
    } else {
      // 有更长的奇数串
      if (val > num) {
        char = key;
        num = val;
      }
    }
  }
  retu = retu.slice(0, retu.length / 2) + new Array(num + 1).join(char) + retu.slice(retu.length / 2);
  console.log(retu);
  return retu;
};
