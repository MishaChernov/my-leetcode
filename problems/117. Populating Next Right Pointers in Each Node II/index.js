const helpers = require('../../helpers');

/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function(root) {
  if (!root) return null;

  const stack = [root];

  while (stack.length) {
      const level = [];
      
      for(node of [...stack]) {
          level.push(node);

          if (node?.left) stack.push(node.left);
          if (node?.right) stack.push(node.right);

          stack.shift();
      }

      for (let i = 0; i < level.length; i++) {
          level[i].next = level?.[i+1] || null;
      }
  }

  return root;
};

console.log(connect(helpers.arrayToTree([1,2,3,4,5,null,7])));

