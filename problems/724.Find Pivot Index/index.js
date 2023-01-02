/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
    if (!nums.length) return -1;

    let leftSum = 0;
    let rightSum = nums.reduce((acc, curr) => acc + curr, 0);

    for (let i = 0; i < nums.length; i++) {
        rightSum -= nums[i];
        if (leftSum === rightSum) {
            return i;
        }
        leftSum += nums[i];
    }

    return -1;
};

console.log(pivotIndex([2, 1, -1]));
