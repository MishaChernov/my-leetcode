/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
  if (!strs.length) return [""];

  const hash = new Map();

  for (str of strs) {
      const sortedStr = str.split('').sort().join('');
      const val = hash.get(sortedStr) || [];

      hash.set(sortedStr, [...val, str]);
  }

  return Array.from(hash.values());
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));