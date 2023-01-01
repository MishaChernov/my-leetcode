'use strict';

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
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

module.exports = {
    ListNode,
    createLinkedListFromArray,
};
