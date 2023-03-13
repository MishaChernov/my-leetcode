'use strict';

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }

function createLinkedListFromArray(array) {
    const list = new ListNode(+array[0]);
    let nextItem = list;

    for (let i = 1; i < array.length; i++) {
        if (typeof +array[i] == 'number') {
            nextItem.next = new ListNode(array[i]);
            nextItem = nextItem.next;
        }
    }
    return list;
}

function arrayToTree(arr) {
    if (!arr.length) {
      return null;
    }
  
    const root = new TreeNode(arr[0]);
    const queue = [root];
    let i = 1;
  
    while (queue.length && i < arr.length) {
      const node = queue.shift();
  
      if (arr[i] !== null) {
        node.left = new TreeNode(arr[i]);
        queue.push(node.left);
      }
  
      i++;
  
      if (i >= arr.length) {
        break;
      }
  
      if (arr[i] !== null) {
        node.right = new TreeNode(arr[i]);
        queue.push(node.right);
      }
  
      i++;
    }
  
    return root;
  }

module.exports = {
    ListNode,
    TreeNode,
    createLinkedListFromArray,
    arrayToTree
};
