
function twoArrayDifference(arr1, arr2) {
  let diffArr = [];
  for (let elem of arr1) {
    if (arr2.includes(elem)) {
      continue;
    } else {
      diffArr.push(elem);
    }
  }
  return diffArr;
}
