
function omit(obj, keys) {
  let newObj = {};
  // return newObj with key in
  for (let key in obj) {
    if (keys.includes(key)) {
      continue;
    }
    newObj[key] = obj[key];
  }
  return newObj;
}
