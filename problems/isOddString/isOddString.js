
function isOddString(str) {
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += str.charCodeAt(i);
  }
  if (sum % 2 === 0) {
    return false;
  } else {
    return true;
  }
}

