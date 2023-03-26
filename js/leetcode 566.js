/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(mat, r, c) {
  let row = mat.length;
  let col = mat[0].length;
  // 判断reshape 操作是可行且合理
  if(row * col > r * c) return mat;
  // 构造的生成矩阵
  let retu = [];
  // 当前遍历mat矩阵中的第几个元素, 第index个元素等于[Math.floor(index - 1 / col)][(index - 1) % col]
  let index = 1;
  for(let i = 0; i < r; i++){
    // 构造生成矩阵的每一行
    let ro = [];
    for(let j = 0; j < c; j++){
      // console.log(Math.floor((index - 1) / col));
      // console.log((index - 1) % col);
      console.log(index);
      ro.push(mat[Math.floor((index - 1) / col)][(index - 1) % col]);
      index += 1;
    }
    retu.push(ro);
  }
  console.log(retu);
  return retu;
};
let a = 4;
let b = 1;
matrixReshape([[1,2],[3,4]], a, b);
