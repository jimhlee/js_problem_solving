
function sumUpDiagonals(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[i][i];
  }

  let backwards = matrix.length - 1;
  for (let i = 0; i < matrix.length; i++) {
    sum += matrix[backwards][i];
    backwards--;
  }

  return sum;
}