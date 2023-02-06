/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function (target, nums) {
    let min = Number.MAX_SAFE_INTEGER;
    let start = 0;
    let runningSum = 0;

    for (let i = 0; i < nums.length; i++) {
        runningSum += nums[i];

        while (runningSum >= target) {
            runningSum -= nums[start];
            min = Math.min(min, i - (start - 1));
            if (min === 1) return min;
            start++;
        }
    }

    return min == Number.MAX_SAFE_INTEGER ? 0 : min;
};

console.log(minSubArrayLen(8, [4, 2, 2, 7, 8, 1, 2, 8, 10]));
