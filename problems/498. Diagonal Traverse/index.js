/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var findDiagonalOrder = function (mat) {
    if (!mat.length) return [];
    if (mat.length === 1) return mat[0];

    let result = mat;

    if (mat[0].length === 1) {
        result.map((el, i) => el[i]);
        return result;
    }

    result = [mat[0][0]];

    let count = mat.length * mat[0].length;
    let isReverse = true;
    let i = 0;
    let j = 1;

    while (count !== 2) {
        result.push(mat[i][j]);

        if (isReverse) {
            // DOWN
            if (j - 1 === -1 || i + 1 === mat.length) {
                isReverse = false;
                if (i + 1 === mat.length) j += 1;
                else i += 1;
            } else {
                i += 1;
                j -= 1;
            }
        } else {
            // UP
            if (i - 1 === -1 || j + 1 === mat[0].length) {
                isReverse = true;

                if (j + 1 === mat[0].length) i += 1;
                else j += 1;
            } else {
                i -= 1;
                j += 1;
            }
        }

        count--;
    }

    result.push(mat[mat.length - 1][mat[0].length - 1]);

    return result;
};

console.log(
    'findDiagonalOrder',
    findDiagonalOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
    ])
);
