function TreeNode(val, left, right) {
  this.val = (val===undefined ? 0 : val)
  this.left = (left===undefined ? null : left)
  this.right = (right===undefined ? null : right)
}

function constructMaximumBinaryTree (nums) {
  if (nums.length === 0) return null;
  console.log(nums);
  const maxV = Math.max(...nums);
  const maxI = nums.indexOf(maxV);
  return new TreeNode(maxV, constructMaximumBinaryTree(nums.slice(0, maxI)), constructMaximumBinaryTree(nums.slice(maxI + 1, nums.length)));
}

console.log(constructMaximumBinaryTree([3,2,1,6,0,5]));
