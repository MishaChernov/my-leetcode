/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    const rotateTimes = k % nums.length;

    nums.splice(0, 0, ...nums.slice(nums.length - rotateTimes));
    nums.splice(nums.length - rotateTimes, rotateTimes);
    return nums;
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));
