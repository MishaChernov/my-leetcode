/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i += 2) {
        if (nums[i] == nums[i + 1]) continue;
        return nums[i];
    }
};

console.log(singleNumber([2, 2, 1]));
