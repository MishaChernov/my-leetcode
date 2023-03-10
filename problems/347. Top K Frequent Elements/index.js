/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
  const hash = new Map();

  for (item of nums) hash.set(item, (hash.get(item) || 0) + 1);

  const frequents = 
      Array.from(hash.entries())
          .sort((a,b) => b[1] - a[1])
          .map(i => i[0])
          .slice(0, k);

  return frequents;
};

console.log(topKFrequent([[1,1,1,2,2,3]], 2));