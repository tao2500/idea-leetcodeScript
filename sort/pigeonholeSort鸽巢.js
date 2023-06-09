// 鸽巢排序是对桶排序算法的改进，也被称作基数分类, 是一种时间复杂度为O(n)，空间复杂度为O(n)且在不可避免遍历每一个元素并且排序的情况下效率最好的一种排序算法。
// 但它只有在差值(或者可被映射在差值)很小的范围内的数值排序的情况下实用。 快速排序可以当作只有两个(有些情况下是三个)"鸽巢"的鸽巢排序。
// 鸽巢其实就是数组,数组的索引位置就表示值,该索引位置的值表示出现次数,如果全部为1次或0次那就是桶排序。
function pigeonholeSort(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const range = max - min + 1;
  const pigeonholes = new Array(range).fill(0).map(() => []);
  // 将元素放入对应的鸽巢
  for (const value of arr) pigeonholes[value - min].push(value);
  // 从鸽巢中取出元素，拼接成排序后的数组
  return [].concat(...pigeonholes);
}
const arr7 = [9, 7, 5, 11, 12, 2, 14, 3, 10, 6];
console.log(pigeonholeSort(arr7));  // 输出：[2, 3, 5, 6, 7, 9, 10, 11, 12, 14]
