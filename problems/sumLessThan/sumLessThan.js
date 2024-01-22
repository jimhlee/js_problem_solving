
function sumLessThan(nums, maxNum) {
  let arr = nums.filter(x => x < maxNum);
  if (arr.length > 0) {
    return arr.reduce((a, b) => a + b);
  }
  return 0;
}
