
function validAnagram(w1, w2) {
  let w1Count = {};
  let w2Count = {};
  for (let elem of w1) {
    if (elem in w1Count) {
      w1Count[elem]++;
    } else {
      w1Count[elem] = 1;
    }
  }
  for (let elem of w2) {
    if (elem in w2Count) {
      w2Count[elem]++;
    } else {
      w2Count[elem] = 1;
    }
  }
  for (let key in w1Count) {
    if (w1Count[key] !== w2Count[key]) {
      return false;
    }
  }
  return true;
}
