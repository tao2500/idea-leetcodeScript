findAnagrams("cbaebabacd","abc");
function findAnagrams (s, p) {
  let has = addMap(p);
  let index = [];
  let size = p.length;
  for(let i = 0; i < s.length; i++){
    // 初始化map
    has = addMap(p);
    // 找到一个包含子串字符的子串开头
    if(has.has(s[i]) && has.get(s[i]) > 0){
      // 从map中将该字符个数-1
      has.set(s[i], has.get(s[i]) - 1);
      // 若其后size - 1个也包含在srt中，则是一个异位词
      for(let j = 1; j < size; j++){
        if(!has.has(s[i + j] || has.get(s[i + j]) <= 0)){
          break;
        }else{
          has.set(s[i + j], has.get(s[i + j]) - 1);
          if(j === size - 1){
            // 已遍历到异位词的最后一个
            index.push(i);
          }
        }
      }
    }
  }
  return index;
};

function addMap(str){
  let map = new Map();
  for(let k = 0; k < str.length; k++){
    map.set(str[k], map.get(str[k]) ? map.get(str[k]) + 1 : 1);
  }
  return map;
}
