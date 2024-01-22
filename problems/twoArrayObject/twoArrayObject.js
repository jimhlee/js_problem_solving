
function twoArrayObject(keys, values) {
  let result = {};
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = values[i];
  }
  for (let key in result) {
    if (result[key] === undefined) {
      result[key] = null;
    }
  }
  return result;
}
