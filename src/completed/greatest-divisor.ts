function gcdOfStrings(str1: string, str2: string): string {
  if (str1 + str2 != str2 + str1) return '';
  
  let h = Math.max(str1.length, str2.length);
  while (h > 0) {
    if (str1.length % h === 0 && str2.length % h === 0) {
      return str1.substring(0, h);
    }
    h--;
  }
  return '';
}

console.log({ RES: gcdOfStrings('ABCABC', 'ABC'), EXP: 'ABC' });
console.log({ RES: gcdOfStrings('ABABAB', 'ABAB'), EXP: 'AB' });
console.log({ RES: gcdOfStrings('LEET', 'CODE'), EXP: '' });
console.log({ RES: gcdOfStrings('ABCDEF', 'ABC'), EXP: '' });
