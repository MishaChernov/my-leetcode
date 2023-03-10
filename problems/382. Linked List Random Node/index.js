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
 */
var Solution = function(head) {
  this.head = head;
  this.length = this.getLength();
};

/**
* @return {number}
*/
Solution.prototype.getLength = function() {
  let length = 0;
  let head = this.head;

  while (head) {
      head = head?.next;
      length++;
  }

  return length;
};

/**
* @return {number}
*/
Solution.prototype.getRandom = function() {
  let random = Math.floor(Math.random() * this.length);
  let head = this.head;
  
  while (random && head) {
      head = head?.next;
      random--;
  }

  return head?.val;
};

/** 
* Your Solution object will be instantiated and called as such:
* var obj = new Solution(head)
* var param_1 = obj.getRandom()
*/
var obj = new Solution(helpers.createLinkedListFromArray([1,2,3,4,5,6,7,8,9]))

console.log(obj.getRandom());