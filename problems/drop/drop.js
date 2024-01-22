
function drop(items, numDrop = undefined) {
  let start;
  if (numDrop === undefined) {
    start = 1;
  } else if (numDrop > items.length){
    return [];
  } else if (numDrop > 0) {
    start = items.length - numDrop + 1;
  } else {
    start = numDrop;
  }

  return items.slice(start);
}
