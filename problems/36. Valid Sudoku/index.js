/**
 * @param {character[][]} board
 * @return {boolean}
 */
const isUnique = (map, key, val) => {
  if (map.has(key)) {
    if (map.get(key).has(val)) return false;
  }
  map.set(key, new Set([...(map.get(key) || []), val]));
  return true;
};

const isValidSudoku = (board) => {
  const hash = new Map();
  const n = board[0].length / 3;

  for (let row = 0; row < board.length; row++) {
    for (let col = 0; col < board[row].length; col++) {
      const item = board[row][col];
      if (Number.isNaN(Number(item))) continue;

      const groupKeyVal = `${Math.floor(row/n)}${Math.floor(col/n)}`;

      if (!isUnique(hash, `r-${row}`, item)) return false;
      if (!isUnique(hash, `c-${col}`, item)) return false;
      if (!isUnique(hash, `g-${groupKeyVal}`, item)) return false;
    }
  }

  return true;
};

console.log(isValidSudoku(
[["5","3",".",".","7",".",".",".","."]
,["6",".",".","1","9","5",".",".","."]
,[".","9","8",".",".",".",".","6","."]
,["8",".",".",".","6",".",".",".","3"]
,["4",".",".","8",".","3",".",".","1"]
,["7",".",".",".","2",".",".",".","6"]
,[".","6",".",".",".",".","2","8","."]
,[".",".",".","4","1","9",".",".","5"]
,[".",".",".",".","8",".",".","7","9"]]))