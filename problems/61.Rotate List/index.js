const helpers = require('../../helpers/index.js');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
    if (!head || !k) return head;

    let curr = head;
    let lastNode;
    let length = 0;

    //Get length
    while (curr) {
        lastNode = curr;
        curr = curr?.next;
        length++;
    }

    //Calculate which item we need to find
    if ((k !== 1 && k % length === 0) || length === 1) return head;
    let cutByIndex = length > k ? length - k + 1 : length - (k % length) + 1;

    //Find & save node that will be a first
    let i = 1;
    let newFirstNode = (curr = head);
    while (i < cutByIndex) {
        newFirstNode = curr;
        curr = curr?.next;
        i++;
    }

    //Move nodes
    let oldFirstNode = head;
    head = newFirstNode.next;
    lastNode.next = oldFirstNode;
    newFirstNode.next = null;

    return head;
};

console.log(
    rotateRight(helpers.createLinkedListFromArray([1, 2, 3, 4, 5]), 10)
);
