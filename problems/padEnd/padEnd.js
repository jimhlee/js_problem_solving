
function padEnd(phrase, minLength, str = ' ') {
  // Need optional third parameter
  if (phrase.length >= minLength) {
    return phrase
  }

  while (phrase.length < minLength) {
    phrase += str
  }

  if (phrase.length > minLength) {
    return phrase.split('').slice(0, minLength).join('')
  }

  return phrase
}

padEnd("abc", 7, "xyz");