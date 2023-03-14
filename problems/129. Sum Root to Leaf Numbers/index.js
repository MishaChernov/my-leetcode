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
var sumNumbers = function(root) {
  if (!root) return 0;

  let stack = [root];
  let result = 0;

  while(stack.length) {
      const head = stack.pop();

      if (head?.right) {
          head.right.val = head.val * 10 + head.right.val;
          stack.push(head.right);
      };

      if (head?.left) {
          head.left.val = head.val * 10 + head.left.val;
          stack.push(head.left);
      }

      if (!head.left && !head.right) {
          result += head.val;
      }
  }

  return result;
};

console.log(sumNumbers(helpers.arrayToTree([4,9,0,5,1])))