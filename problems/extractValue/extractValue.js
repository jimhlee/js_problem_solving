
function extractValue(objs, keyName) {
  let result = [];
  for (let elem of objs) {
    if (keyName in elem) {
      result.push(elem[keyName]);
    }
  }
  return result;
}
