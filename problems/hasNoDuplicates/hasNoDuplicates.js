
function hasNoDuplicates(nums) {
  let result = true
  nums.some((elem, index) => {
    if (nums.indexOf(elem) !== index) {
      result = false
    };
  })
  return result;
}

  /*
  this works because indexOf will return only the index of the first
  instance of the element in question. therefor if the first index doesn't
  match the index of the element we're looking at, it has to be a duplicate
  */