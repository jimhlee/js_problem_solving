
function hasAZero(nums) {
  nums = nums.toString().split('');
  return nums.some(x => x == 0);
}
