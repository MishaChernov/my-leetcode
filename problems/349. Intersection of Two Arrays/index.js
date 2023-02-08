/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    const hashSet = {};
    const result = {};

    for (let i = 0; i < nums1.length; i++) {
        if (!hashSet.hasOwnProperty(nums1[i])) hashSet[nums1[i]] = null;
    }

    for (let i = 0; i < nums2.length; i++) {
        if (
            hashSet.hasOwnProperty(nums2[i]) &&
            !result.hasOwnProperty(nums2[i])
        )
            result[nums2[i]] = null;
    }

    return Object.keys(result);
};

console.log(intersection([1, 2, 2, 1], [2, 2]));
