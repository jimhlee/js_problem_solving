
function firstAndLast(arr) {
  let newArr = [];
  for (let elem of arr) {
    let word = (elem.charAt(0) + elem.charAt(elem.length - 1))
    console.log(word)
    newArr.push(word);
  }
  return newArr;
}
