function removeDuplicates (nums) {
  let l = 0, r = 0, oval = null, oldV = null;
  const numsLen = nums.length;
  for(; r < numsLen; r++) {
    // 如果当前元素满足要求
    if(r < 2 || nums[r] !== oval){
      oval = oldV;
      oldV = nums[l];
      nums[l++] = nums[r];
    }
  }
  nums.splice(l);
  console.log(l);
  console.log(nums);
};
removeDuplicates([1,1,2,2,3,3,3,3,3,3,3,3,3]);
