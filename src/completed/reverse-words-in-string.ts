function reverseWords(s: string): string {
  let outString = '';
  const currentWord = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      currentWord.push(s[i]);
    } else {
      if (s[i - 1] === ' ') {
        outString += '';
      } else {
        outString = currentWord.join('').trim() + ' ' + outString;
        currentWord.length = 0;
      }
    }
  }
  outString = (
    Array.from(s.slice(s.lastIndexOf(' ') + 1, s.length)).join('') +
    ' ' +
    outString
  ).trim();
  return outString;
}

console.log(reverseWords('The sky is blue'));
