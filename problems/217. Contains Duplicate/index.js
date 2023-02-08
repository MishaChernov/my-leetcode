/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    const hashSet = {};

    for (let i = 0; i < nums.length; i++) {
        if (hashSet.hasOwnProperty([nums[i]])) return true;
        else hashSet[nums[i]] = null;
    }

    return false;
};

console.log(containsDuplicate([1, 2, 3, 1]));
