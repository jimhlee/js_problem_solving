
function hasCertainValue(objs, keyName, searchValue) {
  let result = true;
  objs.every((elem) => {
    if (elem[keyName] !== searchValue) {
      result = false;
    }
  })
  return result;
}
