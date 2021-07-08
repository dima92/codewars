function maxSum(root) {
  if (!root) return 0
  return root.value + Math.max(maxSum(root.left), maxSum(root.right))
}

console.log(maxSum(null));
const TreeNode = function(value, left, right) {
  this.value = value;
  this.left = left;
  this.right = right;
};
const root = new TreeNode(5, new TreeNode(-22, new TreeNode(9), new TreeNode(50)), new TreeNode(11, new TreeNode(9), new TreeNode(2)))
console.log(maxSum(root));