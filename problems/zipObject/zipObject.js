
function zipObject(keys, values) {
  let newObj = {};
  for (let i = 0; i < keys.length; i++) {
    newObj[keys[i]] = values[i];
  }
  return newObj;
}
