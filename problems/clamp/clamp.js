
function clamp(value, lowerBound, upperBound) {
  if (value > upperBound) {
    return upperBound;
  } else if(value < lowerBound) {
    return lowerBound;
  } else {
    return value;
  }
}
