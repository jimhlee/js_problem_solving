
function findInObj(arr, key, value) {
  for (let elem of arr) {
    if (elem[key] === value) {
      return elem;
    }
  }
  return undefined;
}
