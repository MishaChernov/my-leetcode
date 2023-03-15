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
var inorderTraversal = function(root) {
    if (!root) return [];

    const stack = [root];
    const result = [];

    while(stack.length) {
      const head = stack.pop();

      if(head?.left) stack.push(head.left);
      if(head?.right) stack.push(head.right);

      result.push(head.val);
    }

    return result.reverse();
};

console.log(inorderTraversal(helpers.arrayToTree([1,null,2,3])));