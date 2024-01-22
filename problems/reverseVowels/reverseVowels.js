
function reverseVowels(str) {
  let vowels = 'aeiouAEIOU'
  str = str.split('');
  let strVowels = [];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      strVowels.push(str[i]);
      str[i] = undefined;
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] === undefined) {
      str[i] = strVowels.pop();
    }
  }
  return str.join('');
}

reverseVowels("amazing");