var RandomizedSet = function() {
  this.set = new Set();
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.insert = function(val) {
  if (this.set.has(val)) return false;
  else this.set.add(val)
  return true;
};

/** 
* @param {number} val
* @return {boolean}
*/
RandomizedSet.prototype.remove = function(val) {
  return this.set.delete(val);
};

/**
* @return {number}
*/
RandomizedSet.prototype.getRandom = function() {
  let random = Math.floor(Math.random() * this.set.size);
  return Array.from(this.set.values())[random];
};

/** 
* Your RandomizedSet object will be instantiated and called as such:
* var obj = new RandomizedSet()
* var param_1 = obj.insert(val)
* var param_2 = obj.remove(val)
* var param_3 = obj.getRandom()
*/

var obj = new RandomizedSet()
var param_1 = obj.insert(1)
obj.insert(2)
obj.insert(3)
var param_2 = obj.remove(1)
var param_3 = obj.getRandom();

console.log(param_1, param_2, param_3);