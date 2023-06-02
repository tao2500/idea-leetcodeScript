// 递归，二分搜索查找位置，同leetCode35.
let searchInsert = function(nums, target) {
  return binary(0, nums.length - 1, nums, target);
};
function binary (l, r, nums, target) {
  if(l > r) return l;
  let middle = l + Math.floor((r - l + 1) / 2);
  if(nums[middle] === target) return middle;
  return nums[middle] > target ? binary(l, middle - 1, nums, target) : binary(middle + 1, r, nums, target);
}

// 给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置
console.log(searchInsert([-1,1,3,5,6,999], 999));
