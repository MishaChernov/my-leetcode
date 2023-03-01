/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  let hash = new Map();
  
  for (let i = 0; i < s.length; i++) {
      hash.set(s[i], {
          i: hash.has(s[i]) ? hash.get(s[i]).i + 1 : 1,
          j: i,
      });
  }

  for(val of hash) {
      if (val[1].i === 1) {
          return val[1].j;
      }
  };

  return -1;
};

firstUniqChar('leetcode');