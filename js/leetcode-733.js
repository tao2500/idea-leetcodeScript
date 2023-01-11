
floodFill([[1,1,1],[1,1,0],[1,0,1]],1,1,2);
function floodFill(image, sr, sc, color) {
  // 递归遍历直接位置的上下左右相同颜色的块，同时修改为指定颜色的块后返回imgge
  let oldColor = image[sr][sc];
  return fun(image, sr, sc, color, oldColor);
};

function fun(image, sr, sc, color, oldColor) {
  // 递归遍历直接位置的上下左右相同颜色的块，同时修改为指定颜色的块后返回imgge
  image[sr][sc] = color;
  // 上
  if(sr > 0 && image[sr - 1][sc] === oldColor)
    image = floodFill(image, sr - 1, sc, color);
  // 下
  if(sr < image.length - 1 && image[sr + 1][sc] === oldColor)
    image = floodFill(image, sr + 1, sc, color);
  // 左
  if(sc > 0 && image[sr][sc - 1] === oldColor)
    image = floodFill(image, sr, sc - 1, color);
  // 右
  if(sr < image[0].length - 1 && image[sr][sc + 1] === oldColor)
    image = floodFill(image, sr, sc + 1, color);
  console.log(image);
  return image;
};
