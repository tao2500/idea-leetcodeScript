pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]);
function pacificAtlantic (heights) {
  let r = heights.length, c = heights[0].length;
  // 保存搜索到的节点,初始左下角与右上角一定满足条件
  let retu = [[r - 1, 0], [0, c - 1]];
  for(let i = 0; i < r; i++){
    for(let j = 0; j < c; j++){
      // 如果该点符合条件
      if(isPA(heights, r, c, retu, i, j)) retu.push([i, j]);
    }
  }
  return retu;
};
// 判断该点是否符合条件，符合条件返回true
function isPA(heights, r, c, retu, i, j){
  // 当前查询的元素已在结果数组中，无需再判断保存
  if(retu.indexOf([i, j]) !== -1) return false;
  // 太平洋或大西洋是否可达
  let pacific = false, atlantic = false;
  // 如果该点的高度高于上方（该点水流可流向上方）
  if(!pacific && i > 0 && heights[i][j] >= heights[i - 1][j]){
    // 判断上方格子是否在retu中，如果在，则该点也满足
    if(retu.indexOf([i - 1, j]) !== -1) return true;
    // 递归判断上一格是否满足条件
    pacific = isPA(heights, r, c, retu, i - 1, j);
  }
  // 如果该点的高度高于左方（该点水流可流向左侧）同时还没找到流向太平洋的路线
  if(!pacific && j > 0 && heights[i][j] >= heights[i][j - 1]){
    // 判断左侧格子是否在retu中，如果在，则该点也满足
    if(retu.indexOf([i, j - 1]) !== -1) return true;
    // 递归判断左侧一格是否满足条件
    pacific = isPA(heights, r, c, retu, i, j - 1);
  }
  // 如果当前节点不能流向太平洋
  if(!pacific) return false;
  // 当前位置能到达太平洋时，继续判断能否到达大西洋。如果该点的高度高于下方（该点水流可流向下方）
  if(pacific && i < r - 1 && heights[i][j] >= heights[i + 1][j]){
    // 判断上方格子是否在retu中，如果在，则该点也满足
    if(retu.indexOf([i + 1, j]) !== -1) return true;
    // 递归判断上一格是否满足条件
    atlantic = isPA(heights, r, c, retu, i + 1, j);
  }
  // 如果该点的高度高于右方（该点水流可流向右侧）同时还没找到流向大西洋的路线
  if(!atlantic && j > c - 1 && heights[i][j] >= heights[i][j + 1]){
    // 判断左侧格子是否在retu中，如果在，则该点也满足
    if(retu.indexOf([i, j + 1]) !== -1) return true;
    // 递归判断左侧一格是否满足条件
    atlantic = isPA(heights, r, c, retu, i, j + 1);
  }
  if(pacific && atlantic) return true;
  return false;
}
