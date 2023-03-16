let generate = function(numRows) {
  // 返回的结果数组
  let retu = [];
  for(let i = 0; i < numRows; i++){
    // 初始化杨辉三角（1 、 2行）
    if(i === 0){
      retu.push([1]);
      continue;
    }
    if(i === 1){
      retu.push([1,1]);
      continue;
    }
    // 第i+1行数组
    let row = [];
    for(let j = 0; j <= i; j++){
      // 该行的第一项与最后一项是1
      if(j === 0 || j === i){
        row.push(1);
        continue;
      }
      // 该行的第j+1项等于  上一行的第j项加上第j+1项的和
      row.push(retu[i - 1][j - 1] + retu[i - 1][j]);
    }
    retu.push(row);
  }
  return retu;
};
generate(5);
