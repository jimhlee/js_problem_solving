
function extractFullName(people) {
  let newArr = [];
  for (let name of people) {
    let full = name.first + ' ' + name.last;
    newArr.push(full);
  }
  return newArr;
}
