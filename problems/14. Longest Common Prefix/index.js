/**
 * @param {string[]} strs
 * @return {string}
 */
var includesAll = function (array, prefix) {
    return array.filter((i) => i.startsWith(prefix)).length === array.length;
};

var longestCommonPrefix = function (strs) {
    if (!strs.length) return '';

    //Find smallest word
    let smallest = strs[0];
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < smallest.length) smallest = strs[i];
    }

    //Edge case if smallest word includes in all elements of array
    if (includesAll(strs, smallest)) return smallest;

    //Find prefix
    let currPrefix = '';
    let prevPrefix = '';

    for (let i = 0; i < smallest.length; i++) {
        currPrefix += smallest[i];

        if (includesAll(strs, currPrefix)) {
            if (currPrefix.length > prevPrefix.length) prevPrefix = currPrefix;
        } else {
            currPrefix = '';
        }
    }

    return currPrefix.length > prevPrefix ? currPrefix : prevPrefix;
};

console.log(longestCommonPrefix(['flower', 'flow', 'flight']));
