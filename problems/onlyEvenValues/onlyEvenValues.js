
function onlyEvenValues(nums) {
  let newArr = [];
  for (let elem of nums) {
    if (elem % 2 === 0) {
      newArr.push(elem);
    }
  }
  return newArr;
}
