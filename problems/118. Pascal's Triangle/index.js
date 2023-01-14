/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    if (numRows === 1) return [[1]];

    const result = [[1], [1, 1]];

    for (let i = 2; i < numRows; i++) {
        let innerArr = [1];
        for (let j = 1; j < result[i - 1].length; j++) {
            innerArr.push(result[i - 1][j - 1] + result[i - 1][j]);
        }
        innerArr.push(1);

        result.push(innerArr);
    }

    return result;
};
