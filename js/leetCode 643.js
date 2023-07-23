function findMaxAverage (nums, k) {
  let sum = 0, maxSum = 0;
  console.log("star");
  for(let i = 0, numLen = nums.length; i < numLen; i++){
    sum += nums[i];
    // 滑动窗口未满
    if(i < k ) {
      if (i === k - 1) maxSum = sum;
    }else{
      sum -= nums[i - k];
      maxSum = Math.max(sum, maxSum);
    }
    console.log(sum);
  }
  return maxSum / k;
};

console.log(findMaxAverage([1,12,-5,-6,50,3], 4));
