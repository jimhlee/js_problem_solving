
function keyCount(objs) {
  let result = {};
  for (let elem of objs) {
    for (let key in elem) {
      if (key in result) {
        result[key]++;
      } else {
        result[key] = 1;
      }
    }
  }
  return result;
}
