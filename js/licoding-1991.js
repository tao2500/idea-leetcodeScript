pivotIndex();
function pivotIndex() {
  let nums = [1, 7, 3, 6, 5, 6];
  let index = parseInt(((nums.length - 1) / 2).toString());
  let leftsum = addSum(nums.slice(0, index));
  let rightsum = addSum(nums.slice(index + 1));

  let count = 0;
  while (count < parseInt(((nums.length - 1) / 2).toString()) && leftsum != rightsum) {
    if (leftsum > rightsum) {
      rightsum += nums[index];
      leftsum -= nums[index - 1];
      index -= 1;
    } else {
      rightsum -= nums[index + 1];
      leftsum += nums[index];
      index += 1;
    }
    count += 1;
  }

  if (leftsum == rightsum) {
    return index;
  }
  return -1;

  function addSum(numArray) {
    let sum = 0;
    let i = 0;
    while (i < numArray.length) {
      sum += numArray[i];
      i++;
    }
    return sum;
  }
};
