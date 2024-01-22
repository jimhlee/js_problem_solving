
function takeRight(items, n = undefined) {
  let newArr = [];
  if (n === undefined) {
    newArr.push(items.at(-1));
  } else if (n === 0) {
    return newArr;
  } else if (n > items.length) {
    return items;
  }

  while (newArr.length < n) {
    for (let i = items.length -1; i > 0; i--) {
      newArr.unshift(items.at(i));
    }
  }
  return newArr;
}
