
function binaryToDecimal(binNum) {
  let sum = 0;
  iterNum = String(binNum).split('').map(x => +x);

  for (let i = 0; i < iterNum.length; i++) {
    sum = (sum * 2) + iterNum[i];
  }
  return sum;
}
