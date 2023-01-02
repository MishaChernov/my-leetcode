/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    if (!nums.length) return -1;
    if (nums.length === 1) return 1;

    let largestInd = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[largestInd]) largestInd = i;
    }

    for (let i = 0; i < nums.length; i++) {
        if (i !== largestInd && nums[i] * 2 > nums[largestInd]) return -1;
    }

    return largestInd;
};

console.log(dominantIndex([3, 0, 0, 2]));
