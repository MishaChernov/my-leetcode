/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix || !matrix.length) return [];
    if (!matrix[1]) return matrix[0];
    if (matrix[0]?.length === 1) return matrix.map((n) => n[0]);

    let count = matrix.length * matrix[0].length;
    let result = [matrix[0][0]];
    let direction = 1; //1 - right 2 - down 3 - left 4 - up
    let loop = 0;
    let i = 0;
    let j = 1;

    while (count !== 1) {
        result.push(matrix[i][j]);

        switch (direction) {
            case 1: {
                if (matrix[i + loop]?.[j + 1 + loop]) j++;
                else {
                    direction = 2;
                    i++;
                }
                break;
            }
            case 2: {
                if (matrix[i + 1 + loop]?.[j - loop]) i++;
                else {
                    direction = 3;
                    j--;
                }
                break;
            }
            case 3: {
                if (matrix[i - loop]?.[j - 1 - loop]) j--;
                else {
                    direction = 4;
                    i--;
                }
                break;
            }
            case 4: {
                if (matrix[i - 1 - loop - 1]?.[j + loop]) i--;
                else {
                    direction = 1;
                    j++;
                    loop++;
                }
                break;
            }
        }

        count--;
    }

    return result;
};

console.log(
    spiralOrder([
        [1, 2, 3, 4],
        [5, 6, 7, 8],
        [9, 10, 11, 12],
        [13, 14, 15, 16],
    ])
);
