/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function(jewels, stones) {
  let hashJewels = new Set();

  for (jewel of jewels) {
      hashJewels.add(jewel);
  }

  return Array.from(stones).filter(stone => hashJewels.has(stone)).length;
};

console.log(numJewelsInStones('aA', 'aasaaAaaa'));