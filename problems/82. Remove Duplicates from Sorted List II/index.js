const helpers = require('../../helpers');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
    let curr = (prev = head);
    let isHead = true;

    while (curr?.next) {
        if (curr.val === curr.next.val) {
            let next = curr.next;

            while (curr?.val === next?.val) {
                next = next?.next;
            }

            if (isHead) {
                if (!next) return null;

                prev.val = next?.val;
                prev.next = next?.next;
            } else {
                prev.next = next;
                curr = next;
            }
            continue;
        }

        prev = curr;
        curr = curr?.next;
        isHead = false;
    }

    return head;
};

console.log(deleteDuplicates(helpers.createLinkedListFromArray([1, 1])));
