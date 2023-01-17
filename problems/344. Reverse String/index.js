/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    if (!s) return '';
    if (s.length == 1) return s;

    for (let i = 0; i < s.length / 2; i++) {
        let j = s.length - 1 - i;
        let tmp = s[i];
        s[i] = s[j];
        s[j] = tmp;
    }

    return s;
};

console.log(reverseString(['h', 'e', 'l', 'l', 'o']));
