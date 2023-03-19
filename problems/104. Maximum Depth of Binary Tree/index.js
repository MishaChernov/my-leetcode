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
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) return 0;

  return 1 + Math.max(maxDepth(root?.left), maxDepth(root?.right));
};

console.log(maxDepth(helpers.arrayToTree[3,9,20,null,null,15,7]))

/**
Input: root = [3,9,20,null,null,15,7]
Output: 3
 */