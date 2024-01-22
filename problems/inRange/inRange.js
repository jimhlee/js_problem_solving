
function inRange(n, start, end) {
  n = Math.round(n)
  if (end === undefined) {
    let temp = start;
    start = 0;
    end = temp;
  } else if (start > end) {
    let temp = start;
    start = end;
    end = temp;
  }

  for (let i = start; i < end; i++) {
    if (n === i) {
      return true;
    }
  }

  return false;
}
