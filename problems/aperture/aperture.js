
function aperture(n, items) {
  let newArr = [];
  if (n > items.length || n < 1) {
    return [];
  }

  for (let i = 0; i < items.length; i++) {
    let a = items.slice(i, i + n);
    if (a.length === n) {
      newArr.push(a);
    }
  }
  return newArr;
}
