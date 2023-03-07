/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) { 
  let longest = 0;
  let hash = new Map();

  for (let i = 0; i < s.length; i++) {
      if (!hash.has(s[i])) {
          hash.set(s[i], i); //Save value + index
          if(i+1 !== s.length) continue;
      }
      longest = Math.max(longest, hash.size);
      i = hash.get(s[i]); //Back to the second value after dublicated one
      hash = new Map();
  }

  return longest;
};

console.log(lengthOfLongestSubstring("au"));