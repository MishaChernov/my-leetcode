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
* @param {number} targetSum
* @return {boolean}
*/
var hasPathSum = function(root, targetSum) {
  if (!root) return false;

  function findPath (node, sum) {
      if (!node) return 0;

      sum += node.val;

      if (!node.left && !node.right) {
          return sum === targetSum;
      } else {
          return findPath(node.left, sum) || findPath(node.right, sum);
      }
  }

  return findPath(root, 0);
};

console.log(hasPathSum(helpers.arrayToTree([5,4,8,11,null,13,4,7,2,null,null,null,1]), 22));