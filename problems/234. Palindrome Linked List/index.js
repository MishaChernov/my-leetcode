/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
const isPalindrome = function(head) {
  if (!head) return false;
  if (!head.next) return true;
  
  let a = head;
  let b = head;
  let last = null;
  
  let i = 0;
  let length = 0;
  // debugger;
  while (a || b) {
     //Get length;
     if (b && !length) {
       i++;
       
       if (b.next) b.next.prev = b;
       if (!b.next) last = b;
       b = b.next;
       continue;
     } else if (!b && !length) {
       length = i;
       i = 0;

       b = last;
     }  
    
    //Check if palindrome
    if (b.val == a.val) {
      if (b == a) return true;
      a = a?.next;
      b = b?.prev;
      
      delete a.next?.prev;
      delete b.next?.prev;
    } else {
      return false;
    }
  }
  
  return true;
};