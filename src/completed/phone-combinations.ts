function letterCombinations(digits: string): string[] {
  const c: string[] = [];
  if (!digits.length) return c;
  const keys = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z']
  };
  if (digits.length === 1) {
    return keys[digits[0] as keyof typeof keys];
  }

  const backtrack = (i: number, combo = '') => {
    if (combo.length === digits.length) {
      c.push(combo);
      return;
    }
    let possibleLetters = keys[digits[i] as keyof typeof keys];
    for (let l of possibleLetters) {
      // console.log({ combo });
      // console.log({ l, possibleLetters });
      combo += l;
      backtrack(i + 1, combo);
      combo = combo.slice(0, combo.length - 1);
      // console.log({ 'after backtrack slice': combo });
    }

    
  };

  backtrack(0);
  return c;
}

console.log({
  RES: letterCombinations('23'),
  EXP: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
});
console.log({
  RES: letterCombinations('234'),
  EXP: [
    'adg',
    'adh',
    'adi',
    'aeg',
    'aeh',
    'aei',
    'afg',
    'afh',
    'afi',
    'bdg',
    'bdh',
    'bdi',
    'beg',
    'beh',
    'bei',
    'bfg',
    'bfh',
    'bfi',
    'cdg',
    'cdh',
    'cdi',
    'ceg',
    'ceh',
    'cei',
    'cfg',
    'cfh',
    'cfi'
  ]
});
