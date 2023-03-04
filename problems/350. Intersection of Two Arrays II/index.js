/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  const hash = new Map();
  const result = [];

  for (let i = 0; i < nums1.length; i++) {
      hash.set(nums1[i], hash.has(nums1[i]) ? hash.get(nums1[i]) + 1 : 1);
  }

  for (let i = 0; i < nums2.length; i++) {
      if (hash.has(nums2[i])) {
          let count = hash.get(nums2[i]);

          if (count !== 1) {
              hash.set(nums2[i], count - 1);
          } else if (count === 1) {
              hash.delete(nums2[i]);
          }

          result.push(nums2[i]);
      }
  }

  return result;
};

console.log(intersect('hello', 'll'));