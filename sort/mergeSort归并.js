// 归并排序是建立在归并操作上的一种有效的排序算法。该算法是采用分治法，归并排序的性能不受输入数据的影响，但表现比选择排序好的多，因为始终都是O(n log n）的时间复杂度
// 基本思路就是将数组分成二组 A，B，如果这二组组内的数据都是有序的(最终只有一个元素时)，那么就可以 很方便的将这二组数据进行排序，然后合并。
// 归并指得就是将两个或两个以上的有序序列合并成一个新的有序序列
function mergeSort(nums) {
  return split(nums, 0, nums.length - 1);;
}
// 拆分数组
function split (nums, l, r) {
  if (l < r) {
    let middle = Math.floor((l + r) / 2);
    // 递归，继续拆分左半边和右半边
    split(nums, l, middle);
    split(nums, middle + 1, r);
    // 合并
    merge(nums, l, middle, r);
  }
  return nums;
}

// 合并数组
function merge (nums, l, middle, r) {
  // 左半部分数组的起点跟终点
  let l_star = l, l_end = middle;
  // 右半部分数组的起点跟终点
  let r_star = middle + 1, r_end = r;
  // 用于临时保存排序后的结果
  let arr = [];
  // 临时数组已保存的元素个数
  // let count = 0;
  while (l_star <= l_end && r_star <= r_end) {
    // 取较小值加入临时数组
    if (nums[l_star] < nums[r_star]) {
      arr.push(nums[l_star]);
      l_star++;
    }else {
      arr.push(nums[r_star]);
      r_star++;
    }
  }
  // 如果左半部分数组还有元素
  while (l_star <= l_end) {
    arr.push(nums[l_star]);
    l_star++;
  }
  while (r_star <= r_end) {
    arr.push(nums[r_star]);
    r_star++;
  }

  // 将排序后的数组arr覆盖原数组nums的相应位置
  let arrLen = arr.length;
  for (let i = 0; i < arrLen; i++) nums[l + i] = arr[i];
}

console.log(mergeSort([999,3,1,6,5,0,-1]));
