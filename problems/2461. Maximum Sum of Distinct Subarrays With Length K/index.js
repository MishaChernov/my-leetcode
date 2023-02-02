/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
//Slow approach O(nk)
var maximumSubarraySum1 = function (nums, k) {
    let result = 0;

    main: for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        let hash = [];
        for (let j = 0; j < k; j++) {
            if (hash.includes(nums[i + j])) continue main;
            sum += nums[i + j];
            hash.push(nums[i + j]);
        }
        if (sum > result) result = sum;
    }

    return result;
};

//Slow approach O(nk)
var maximumSubarraySum2 = function (nums, k) {
    let result = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums?.[i + 1]) continue;

        let subarray = new Set(nums.slice(i, i + k));

        //Check if unique
        if (subarray.size < k) continue;

        //Get sum
        let sum = 0;
        subarray.forEach((i) => (sum += i));

        if (sum > result) result = sum;
    }

    return result;
};

//
var maximumSubarraySum = function (nums, k) {
    let max = 0;
    let start = 0;
    let runningSum = 0;
    let subLen = 0;
    let cache = {};

    for (let i = 0; i < nums.length; i++) {
        if (cache[nums[i]]) {
            while (cache[nums[i]]) {
                runningSum -= nums[start];
                delete cache[nums[start]];
                start++;
                subLen--;
            }
        }
        runningSum += nums[i];
        cache[nums[i]] = 1;
        subLen++;

        if (subLen === k) {
            max = Math.max(runningSum, max);
            runningSum -= nums[start];
            delete cache[nums[start]];
            start++;
            subLen--;
        }
    }

    return max;
};

console.log(maximumSubarraySum([1, 5, 4, 2, 9, 9, 9], 3));
