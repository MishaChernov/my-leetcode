/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (haystack.length < needle.length) return -1;
    let result = -1;
    for (let i = 0, j = 0; i < haystack.length; i++) {
        if (haystack[i] === needle[0]) {
            for (let j = 0; j < needle.length; j++) {
                if (haystack[i + j] != needle[j]) {
                    result = -1;
                    break;
                }
                if (!needle?.[j + 1]) return i;
            }
        }
    }
    return result;
};

console.log(strStr('mississippi', 'issip'));
