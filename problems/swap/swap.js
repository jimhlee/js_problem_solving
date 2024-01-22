
function swap(items, idx1, idx2) {
  let swapChars = [items[idx1], items[idx2]];
  items[idx1] = swapChars[1];
  items[idx2] = swapChars[0];
  return items;
}
