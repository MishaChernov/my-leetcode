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
 * @return {TreeNode[]}
 */
var findDuplicateSubtrees = function(root) {
  let res = [];

  postorder(root, new Map(), res);

  return res;
};

function postorder (curr, map, res) {
  if (curr == null) return '#';
  let serial = cur.val + "," + postorder(cur.left, map, res) + "," + postorder(cur.right, map, res);
  map.set(serial, (map.get(serial) || 0) + 1);
  if (map.get(serial) == 2) res.push(cur);
  return serial;
}
