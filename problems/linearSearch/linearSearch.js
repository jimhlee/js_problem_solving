
function linearSearch(items, sought) {
  for (let i = 0; i < items.length; i++) {
    if (items[i] === sought) {
      return i
    }
  }
  return -1
}
