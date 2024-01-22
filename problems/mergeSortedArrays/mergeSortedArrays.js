
function mergeSortedArrays(a, b) {
  let result = [];
  while (a.length > 0 && b.length > 0) {
    if (a[0] < b[0]) {
      result.push(a.shift());
    } else {
      result.push(b.shift());
    }
  }
  if (a.length > 0) {
    a.map(x => result.push(x));
  } else if (b.length > 0) {
    b.map(x => result.push(x));
  }
  return result;
}
