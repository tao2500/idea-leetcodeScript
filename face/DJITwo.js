// 求无人机坐标
function calculateFinalPositi(instructions) {
  let x = 0, y = 0;
  let len = instructions.length;
  // U：前、D：后、L：左、R：右
  for (let i = 0; i < len; i++) {
    switch (instructions[i]) {
      case 'U':
        y++;
        break;
      case 'D':
        y--;
        break;
      case 'L':
        x--;
        break;
      case 'R':
        x++;
    }
  }
  return [x, y];
}

let res = calculateFinalPositi("RUDDLLUR");
console.log(res.join(' '));
