
function extractKey(objs, keyName) {
  let arr = [];
  for (let elem of objs) {
    arr.push(elem[keyName]);
  }
  return arr;
}
