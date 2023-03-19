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
 * @return {number[][]}
 */
var levelOrder = function(root) {
  if (!root) return [];

  const stack = [root];
  const result = [];

  while (stack.length) {
      const level = [];

      for (node of [...stack]) {
          level.push(node.val);

          if (node?.left) stack.push(node?.left);
          if (node?.right) stack.push(node?.right);

          stack.shift();
      }
      
      result.push(level);
  }

  return result;
};

console.log(levelOrder(helpers.arrayToTree([3,9,20,null,null,15,7])));

/**
Input: root = [3,9,20,null,null,15,7]
Output: [[3],[9,20],[15,7]]
 */