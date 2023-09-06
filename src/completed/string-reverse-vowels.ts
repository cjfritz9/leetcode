function reverseVowels(s: string): string {
  const vowels = 'aeiou';

  const viw = [];
  const vpos = [];
  const sa = Array.from(s);

  for (let i = 0; i < s.length; i++) {
    if (vowels.includes(s[i].toLowerCase())) {
      viw.unshift(s[i]);
      vpos.push(i);
    }
  }

  for (let i = 0; i < viw.length; i++) {
    sa[vpos[i]] = viw[i];
  }

  return sa.join('');
}

console.log(reverseVowels('hello how are you doing'));
