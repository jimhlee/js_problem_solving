
function hasCertainKey(objs, keyName) {
  for (let elem of objs) {
    if (keyName in elem) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
