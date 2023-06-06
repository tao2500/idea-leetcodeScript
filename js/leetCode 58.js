function lengthOfLastWord(s) {
  // 末尾添加一个空格，保障最后一个单词也参与比较
  s += ' ';
  let previousCount = 0;
  let nowCount = 0;
  for (let i of s){
    if (i !== ' '){
      nowCount++;
    }else if(nowCount > 0) {
      console.log("ok" + i);
      previousCount = nowCount;
      nowCount = 0;
    }
  }
  return previousCount;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
