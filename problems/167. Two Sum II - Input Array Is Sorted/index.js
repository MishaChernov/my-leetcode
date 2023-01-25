/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    loop1: for (let i = 0; i <= numbers.length; i++) {
        for (let j = numbers.length - 1; j >= i; j--) {
            if (numbers[i] + numbers?.[j] === target) return [i + 1, j + 1];
            if (numbers[i] === numbers?.[j] && numbers?.[j] < target) {
                i = j;
                continue loop1;
            }
        }
    }
    return numbers;
};

// console.log(twoSum([2, 7, 11, 15], 9));
// console.log(twoSum([2, 3, 4], 6));
console.log(twoSum([-1, 0], -1));
