var moveZeroes = function(nums) {
    const res = [];
    let zeroNum = 0;
    const numsLen = nums.length;
    for(let i = 0; i < numsLen; i++) {
        if(nums[i] === 0) {
            zeroNum += 1;
        }else {
            res.push(nums[i])
        }
    }
    for(let j = zeroNum; j > 0; j--) {
        res.push(0)
    }
    return res
};

console.log(moveZeroes([0,1,0,3,12]))