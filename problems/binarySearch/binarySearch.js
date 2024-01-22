
function binarySearch(arr, val) {
  let start = 0;
  let end  = arr.length -1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (arr[mid] === val) {
      return arr.indexOf(val);
    } else if (arr[mid] > val) {
      end = mid - 1;
    } else if (arr[mid] < val) {
      start = mid + 1;
    }
  }
  return -1;
}
