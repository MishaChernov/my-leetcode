/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const doArrayFromList = (list) => {
  let array = [];
  if (!list.next && typeof list.val == 'number') {
    array.push(list.val);
    return array;
  }
  
  let res = list;
  
  while(res.next) {
    array.push(res.val);
    res = res.next;
  }
  array.push(res.val);
  
  return array;
}

const doListFromArray = array => {
  let list = new ListNode(+array[0]);
  let nextItem = list;
  
  for (let i = 1; i < array.length; i++) {
    if (typeof +array[i] == 'number') {
      nextItem.next = new ListNode(array[i]);
      nextItem = nextItem.next;
    }
  }
  return list;
}


const findBigSum = (first, second) => {
	let sum = '';
	let carry = 0;
	let diff = second.length - first.length;
  
	for (let i = first.length - 1; i >= 0; i--) {
		var temp =
			(Number(first.charAt(i)) % 10) +
			(Number(second.charAt(i + diff)) % 10) +
			carry;
		if (temp >= 10) {
			sum = (temp % 10) + sum;
			carry = Math.floor(temp / 10);
		} else {
			sum = temp + sum;
			carry = 0;
		}
	}
	if (carry) {
		sum = carry + sum;
	}
	return sum;
}

const doReverce = arr => arr.reverse().join('');

const addTwoNumbers = function(l1, l2) {
    const arr1 = doArrayFromList(l1);
    const arr2 = doArrayFromList(l2);
  
    const bigL1 = doReverce(arr1);
    const bigL2 = doReverce(arr2);
    
    let sum;
  
    if (bigL1.length > bigL2.length) {
      sum = findBigSum(bigL1, bigL2);
    } else {
      sum = findBigSum(bigL2, bigL1);
    }
  
    const res = doListFromArray(String(sum).split('').reverse());
    return res;
};