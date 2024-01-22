
function addKeyAndValue(arr, key, value) {
  let returnedArr = arr;
  for (let obj of returnedArr) {
    obj[key] = value;
  }
  return returnedArr;
}
