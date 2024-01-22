
function filterByKey(objs, keyName) {
  return objs.filter(obj => keyName in obj);
}
