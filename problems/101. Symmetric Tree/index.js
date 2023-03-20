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
 * @return {boolean}
 */
var isSymmetric = function(root) {
  let stackLeft = [root?.left];
  let stackRight = [root?.right];

  if (root?.left?.val !== root?.right?.val) return false;

  while (stackLeft.length && stackRight.length) {
      const leftHead = stackLeft.pop();
      const rightHead = stackRight.pop();

      if (leftHead?.left?.val !== rightHead?.right?.val) return false;
      if (leftHead?.right?.val !== rightHead?.left?.val) return false;

      if (leftHead?.left) stackLeft.push(leftHead.left);
      if (leftHead?.right) stackLeft.push(leftHead.right);

      if (rightHead?.right) stackRight.push(rightHead.right);
      if (rightHead?.left) stackRight.push(rightHead.left);
  }

  return true;
};


console.log(isSymmetric(helpers.arrayToTree([1,2,2,3,4,4,3])));
console.log(isSymmetric(helpers.arrayToTree([1,2,2,null,3,null,3])));
