
function unzip(matrix) {
  let newMatrix = [];
  let numRows = matrix[0].length;
  for (let i = 0; i < numRows; i++) {
    newMatrix.push([]);
  }

  for (let i = 0; i < numRows; i++) {
    // new row created at matrix[i] on each loop
    // i keeps track of the column we're on
    for (let j = 0; j < matrix.length; j++) {
      //j keeps track of the row we're on
      // if (temp.length === numCols) {
      //   newMatrix[i].push(temp);
      // }
      newMatrix[i].push(matrix[j][i]);
    }
  }

  return newMatrix;
}


// unzip([
//   [1, 2, 3],
//   [4, 5, 6],
// ]);

/*
[
[1,4],
[2,5],
[3,6]
]
*/