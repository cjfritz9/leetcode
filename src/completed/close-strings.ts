// function closeStrings(word1: string, word2: string): boolean {
//   if (word1.length !== word2.length) return false;
//   if (word1 === word2) return true;

//   const m1 = new Map() as Map<string, number>;
//   const m2 = new Map() as Map<string, number>;

//   for (let i = 0; i < word1.length; i++) {
//     m1.set(word1[i], (m1.get(word1[i]) ?? 0) + 1);
//     m2.set(word2[i], (m2.get(word2[i]) ?? 0) + 1);
//   }
//   const a1 = Array.from(m1).sort();
//   const a2 = Array.from(m2).sort();

//   // console.log(a1, a2)
//   for (let i = 0; i < a1.length; i++) {
//     // console.log(a1[i], a2[i]);
//     if (a1[i][0] !== a2[i][0] && a1[i][1] !== a2[i][1]) return false;
//   }

//   return true;
// }

// function closeStrings(word1: string, word2: string): boolean {
//   if (word1.length !== word2.length) return false;

//   const m1 = new Map<string, number>();
//   const m2 = new Map<string, number>();
//   const s1 = new Set<string>(word1.split(''));
//   for (let i = 0; i < word1.length; i++) {
//     m1.set(word1[i], (m1.get(word1[i]) ?? 0) + 1);
//     m2.set(word2[i], (m2.get(word2[i]) ?? 0) + 1);
//     if (!s1.has(word2[i])) return false;
//   }

//   const a1 = Array.from(m1.values()).sort();
//   const a2 = Array.from(m2.values()).sort();
//   for (let i = 0; i < a1.length; i++) {
//     if (a1[i] !== a2[i]) return false;
//   }

//   return true;
// }

const closeStrings = (word1: string, word2: string): boolean => {
  if (word1.length < word2.length) return false;

  const dic1 = new Map<string, number>();
  const dic2 = new Map<string, number>();
  
  for(let i = 0; i < word1.length; i++) {
      const c1 = word1[i];
      const c2 = word2[i];
      dic1.set(c1, (dic1.get(c1) ?? 0) + 1);
      dic2.set(c2, (dic2.get(c2) ?? 0) + 1);
  }
  
  for (const key of dic1.keys()) {
      if (!dic2.has(key)) return false;
  }
  
  const s1 = [...dic1.values()].sort().toString();
  const s2 = [...dic2.values()].sort().toString();
  
  return s1 === s2;
};

console.log({ OUT: closeStrings('abc', 'bca'), EXP: ['true'] });
console.log({ OUT: closeStrings('cabbba', 'aabbss'), EXP: ['false'] });
console.log({ OUT: closeStrings('cabbba', 'abbccc'), EXP: ['true'] });
console.log({ OUT: closeStrings('abbzccca', 'babzzczc'), EXP: ['true'] });
console.log({ OUT: closeStrings('uau', 'ssx'), EXP: ['false'] });