
function vowelCount(phrase) {
  phrase = phrase.split('');
  let vowels = 'aeiou';
  let countObj = {};
  for (let elem of phrase) {
    let vowel = elem.toLowerCase();
    if (vowels.includes(vowel)) {
      if (vowel in countObj) {
        countObj[vowel]++;
      } else {
        countObj[vowel] = 1;
      }
    }
  }
  return countObj;
}
