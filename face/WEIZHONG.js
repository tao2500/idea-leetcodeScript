// 1
// idea：利用栈，反向推入元素，若栈中已存在相同元素则不推入，最后反转栈 45%
let sc = read_line();
let arr = sc.split(' ');
// 珠子数量
const num = parseInt(arr[0]);
sc = read_line();
// 柱子颜色数组
const color = sc.split(' ');
color.map((v, index, arr) => arr[index] = parseInt(v));
const ret = [];
for(let i = num - 1; i > -1; i--) {
  if(!ret.includes(color[i])) {
    ret.push(color[i]);
  }
}
console.log(ret.reverse().join(' '));

// idea2：暴力法，反转数组，数组去重，再反转数组 45%
let sc = read_line();
let arr = sc.split(' ');
// 珠子数量
const num = parseInt(arr[0]);
sc = read_line();
// 柱子颜色数组
let color = sc.split(' ');
color.map((v, index, arr) => arr[index] = parseInt(v));
color = [...new Set(color.reverse())];
console.log(color.reverse().join(' '));


// 2
// idea：模拟 45%
let sc = read_line();
let arr = sc.split(' ');
let n = parseInt(arr[0]);
sc = read_line();
arr = sc.split(' ');
let music = sc.split(' ');
music.map((v, i, arr) => arr[i] = parseInt(v));
let ret = [];
while(n-- > 0) {
  ret.push(music.shift());
  music.push(music.shift());
}
console.log(ret.join(' '));

// 3
// idea：数学归纳，连通岛屿，记录起点与终点能到达的所有岛屿(包含自身)，若起点不能到终点，则方案数为起点集合数 * 终点集合数，否则直接返回起点集合数 36%
let sc = read_line();
let arr = sc.split(' ');
let n = parseInt(arr[0]);
let m = parseInt(arr[1]);
let s = parseInt(arr[2]);
let t = parseInt(arr[3]);
// 所有航线
// let link = [];
let star, end;
let starNode = [s], targetNode = [t];
while(sc = read_line()) {
  arr = sc.split(' ');
  star = parseInt(arr[0]);
  end = parseInt(arr[1]);
  // 如果起点或终点包含出发岛屿或目标岛屿
  if(starNode.includes(star)) starNode.push(end);
  if(starNode.includes(end)) starNode.push(star);
  if(targetNode.includes(star)) targetNode.push(end);
  if(targetNode.includes(end)) targetNode.push(star);
}
// 去重
starNode = [...new Set(starNode)];
targetNode = [...new Set(targetNode)];
console.log(starNode.includes(t) ? starNode.length : starNode.length * targetNode.length);


