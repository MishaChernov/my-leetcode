/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var postorderTraversal = function(root) {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length) {
      let head = stack.pop();
      
      result.unshift(head.val);
      
      if (head?.left) stack.push(head.left);
      if (head?.right) stack.push(head.right);
  }

  return result;
};

console.log(postorderTraversal(helpers.arrayToTree([1,null,2,3])));
