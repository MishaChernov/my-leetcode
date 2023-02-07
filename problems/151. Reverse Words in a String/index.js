/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    return s.split(' ').filter(Boolean).reverse().join(' ');
};

console.log(reverseWords('the sky is blue'));
