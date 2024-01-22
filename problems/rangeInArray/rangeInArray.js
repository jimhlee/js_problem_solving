
function rangeInArray(nums, start, end) {
  // Add any parameters you need. Good luck!
  let sum = 0;
  if (start === undefined) {
    start = 0;
  }
  if (end === undefined || end > nums.length) {
    end = nums.length - 1;
  }

  for (let i = start; i <= end; i++) {
    sum += nums[i];
  }

  return sum
}
