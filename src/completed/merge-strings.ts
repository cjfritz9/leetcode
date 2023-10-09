function mergeAlternately(word1: string, word2: string): string {
  let result = '';
  const h = word1.length > word2.length ? word1.length : word2.length;

  for (let i = 0; i < h; i++) {
    if (!word1[i]) {
      result += word2.slice(i, word2.length);
      break;
    }
    if (!word2[i]) {
      result += word1.slice(i, word1.length);
      break;
    }
    result += word1[i];
    result += word2[i];
  }

  return result;
}

console.log({ RES: mergeAlternately('abc', 'pqr'), EXP: 'apbqcr' });
console.log({ RES: mergeAlternately('ab', 'pqrs'), EXP: 'apbqrs' });
console.log({ RES: mergeAlternately('abcd', 'pq'), EXP: 'apbqcd' });
