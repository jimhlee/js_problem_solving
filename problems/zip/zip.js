
function zip() {
  let arrNum = arguments.length;
  let finalArr = [];
  let temp = [];

  for (let i = 0; i < arguments[0].length; i++) {
    // keeps track of how many elems are in each arg
    for (let j = 0; j < arrNum; j++) {
      // keeps track of how many args there are in arguments
      temp.push(arguments[j][i])
      if (temp.length === arrNum) {
        finalArr.push(temp);
        temp = [];
      }
    }
  }
  return finalArr;
}
