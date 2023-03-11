/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  if (ransomNote.length < 1 || magazine.length > Math.pow(10, 5)) return false;
  let copy = ransomNote.split('');
  
  for (let i = 0; i < ransomNote.length; i++) {
      let el = ransomNote[i];
       
      if (magazine.length && magazine.includes(el)) {
          const index = copy.indexOf(el);
          magazine = magazine.replace(el, '');
          if (copy.length > 1) {
            copy.splice(index, 1);
          } else {
            copy = [];
          }
      }
  }
  return !copy.length;
};