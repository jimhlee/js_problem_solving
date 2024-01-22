
function greatestCommonDivisor(num1, num2) {
  let num1Divs = [];
  let num2Divs = [];
  for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0) {
      num1Divs.push(i);
    }
  }
  for (let i = 1; i <= num2; i++) {
    if (num2 % i === 0) {
      num2Divs.push(i);
    }
  }
  let highest = 0
  for (let elem of num1Divs) {
    if (num2Divs.includes(elem) && elem > highest) {
      highest = elem
    }
  }
  return highest
}
