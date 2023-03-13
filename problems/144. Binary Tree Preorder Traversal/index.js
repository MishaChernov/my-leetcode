const helpers = require('../../helpers');

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
var preorderTraversal = function(root) {
  if (!root) return [];

  let stack = [root];
  let result = [];

  while (stack.length) {
      let head = stack.pop();

      if (head?.right) stack.push(head.right);
      if (head?.left) stack.push(head.left);

      result.push(head.val);
  }

  return result;
};

console.log(preorderTraversal(helpers.arrayToTree([1,null,2,3])));