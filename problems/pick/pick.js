
function pick(obj, keys) {
  let newObj = {};
  for (let key in obj) {
    for (let elem of keys) {
      if (elem === key) {
        newObj[key] = obj[key];
      }
    }
  }
  return newObj;
}
