
function sameFrequency(num1, num2) {
  let iterNum1 = num1.toString().split('');
  let iterNum2 = num2.toString().split('');

  if (iterNum1.length !== iterNum2.length) {
    return false;
  }

  let obj1 = {};
  for (let digit of iterNum1) {
    if (digit in obj1) {
      obj1[digit]++;
    } else {
      obj1[digit] = 1;
    }
  }

  let obj2 = {};
  for (let digit of iterNum2) {
    if (digit in obj2) {
      obj2[digit]++;
    } else {
      obj2[digit] = 1;
    }
  }

  for (let key in obj1) {
    if (key in obj2 && obj1[key] === obj2[key]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
