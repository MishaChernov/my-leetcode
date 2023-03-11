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
var middleNode = function(head) {
  let len = 0;
  let temp = head;
  
  let result = new ListNode(head.val);
  result.next = head.next;
  
  //Get length
  while(temp.next) {
    len++;
    temp = temp.next;
  };
  
  let i = 0;
  
  while(result.next && i < len / 2 - 1) {
    if (result?.next?.next) result.next = result.next.next;
    i++;
  }

  return result.next || result;
};