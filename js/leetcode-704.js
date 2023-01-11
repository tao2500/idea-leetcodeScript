search([-1,0,3,5,9,12],2);
function search (nums, target) {
  if(nums[0] === target) return 0;
  let star = 0;
  let end = nums.length - 1;
  while(star < end){
    let middle = Math.floor((end + star) / 2);
    if(nums[middle] === target){
      return middle;
    }else if(target > nums[middle]){
      if (star === middle) break;
      star = middle;
    }else{
      if (end === middle) break;
      end = middle;
    }
  }
  return -1;
};
