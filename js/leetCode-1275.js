tictactoe([[0,0],[2,0],[1,1],[2,1],[2,2]]);
function tictactoe (moves) {
  let arr = Array.from(Array(3), () => new Array(3));
  let len = moves.length;
  for(let i = 0; i < len; i++){
    // 如果是A下棋
    if(i % 2 !== 1){
      arr[moves[i][0]][moves[i][1]] = 1;
    }else{
      arr[moves[i][0]][moves[i][1]] = 2;
    }
    // 如果下完该步棋产生了获胜者
    if(i >= 4 && chack(arr)){
      return i % 2 === 0 ? A : B;
    }
  }
  if(len < 9) return "Pending";
  return "Draw";
};
function chack(arr){
  let compose = [[[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 1], [1, 2]], [[2, 0], [2, 1], [2, 2]], [[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]], [[0, 0], [1, 1], [2, 2]], [[0, 2], [1, 1], [2, 0]]];
  // 遍历每一种可能获胜的路径（三个点）的下标
  for(let i of compose){
    // 此时i为有三行、每行一个坐标的二维数组（可能获胜路径的下标）
    if(arr[i[0][0]][i[0][1]] === arr[i[1][0]][i[1][1]] === arr[i[2][0]][i[2][1]]) return true;
  }
  return false;
}
