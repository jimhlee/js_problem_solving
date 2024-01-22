function take(items, count) {
  // Add any parameters you need. Good luck!
  let countCopy = [];
  if (count === undefined) {
    countCopy.push(items[0]);
  } else if (count > items.length) {
    countCopy = items;
  } else {
    for (let i = 0; i < count; i++) {
      countCopy.push(items[i]);
    }
  }

  return  countCopy;
}
