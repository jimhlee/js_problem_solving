
function createMatrix(numCols, numRows) {
  let result = [];
  for (let i = 0; i <numRows; i++) {
    result.push([]);
  }
  for (let i = 0; i < numRows; i++) {
    while (result[i].length < numCols) {
      result[i].push(0)
    }
  }
  return result;
}










// createMatrix(0, 0);  // []
// createMatrix(1, 2);  // [[0],[0]]
// createMatrix(2, 1);  // [[0,0]]
// createMatrix(2, 2);