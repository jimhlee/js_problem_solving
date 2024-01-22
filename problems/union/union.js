
function union() {
  let newArr = [];
  for (let i = 0; i < arguments.length; i++) {
    newArr.push(arguments[i]);
  }
  newArr = newArr.flat();
  let finalArr = []
  for (let elem of newArr) {
    if (finalArr.includes(elem)) {
      continue;
    }
    finalArr.push(elem);
  }
  return finalArr;
}
