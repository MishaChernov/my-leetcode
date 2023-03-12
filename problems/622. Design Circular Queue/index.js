/**
 * @param {number} k
 */
var MyCircularQueue = function(k) {
  this.queue = new Array(k);
  this.length = k;
  this.filled = 0;
  this.head = 0;
  this.tail = 0;
}; 

/** 
* @param {number} value
* @return {boolean}
*/
MyCircularQueue.prototype.enQueue = function(value) {
  if (this.length == this.filled) return false;
  this.queue[this.tail] = value;
  this.tail = this.tail + 1 == this.length ? 0 : this.tail + 1;
  this.filled++;
  
  return true;
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.deQueue = function() {
  if (this.filled == 0) return false;

  this.queue[this.head] = null;
  this.head = this.head + 1 == this.length ? 0 : this.head + 1;
  this.filled--;
  
  return true;
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Front = function() {
  return this.filled === 0 ? -1 : this.queue[this.head];
};

/**
* @return {number}
*/
MyCircularQueue.prototype.Rear = function() {
  return this.filled === 0 ? -1 : this.queue[this.tail == 0 ? this.length - 1 : this.tail - 1];
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isEmpty = function() {
  return this.filled === 0;
};

/**
* @return {boolean}
*/
MyCircularQueue.prototype.isFull = function() {
  return this.length === this.filled;
};

/** 
* Your MyCircularQueue object will be instantiated and called as such:
* var obj = new MyCircularQueue(k)
* var param_1 = obj.enQueue(value)
* var param_2 = obj.deQueue()
* var param_3 = obj.Front()
* var param_4 = obj.Rear()
* var param_5 = obj.isEmpty()
* var param_6 = obj.isFull()
*/

var obj = new MyCircularQueue(5)
var param_1 = obj.enQueue(3) //true
var param_2 = obj.Rear() // 3
var param_3 = obj.Front() // 3
var param_4 = obj.deQueue() // true
var param_5 = obj.Front() // -1
var param_6 = obj.deQueue() // false
var param_7 = obj.Front() // -1
var param_8 = obj.enQueue(4) // true
var param_9 = obj.enQueue(2) // true
var param_10 = obj.enQueue(2) // true
var param_11 = obj.enQueue(3) // true


/**
["MyCircularQueue","enQueue","Rear","Front","deQueue","Front","deQueue","Front","enQueue","enQueue","enQueue","enQueue"]
[[3],[2],[],[],[],[],[],[],[4],[2],[2],[3]]
 */
