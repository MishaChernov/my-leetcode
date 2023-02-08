/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let hash = {};
    for (let i = 0; nums.length > i; i++) {
        let diff = target - nums[i];

        if (hash[diff] !== undefined) {
            return [hash[diff], i];
        }
        hash[nums[i]] = i;
    }
};

console.log(twoSum([-3, 4, 3, 90], 0));
