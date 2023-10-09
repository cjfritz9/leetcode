// function removeStars(s: string): string {
//   const res = [];
//   for (let i = 0; i < s.length; i++) {
//     if (s[i] !== '*') {
//       res.push(s[i]);
//     } else {
//       res.length = res.length - 1;
//     }
//   }
//   return res.join('');
// }

function removeStars(s: string): string {
  let res = '';
  let skip = 0;

  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === '*') {
      skip++;
    } else if (skip > 0) {
      skip--;
    } else {
      res = s[i] + res;
    }
  }
  return res;
}

console.log({ RES: removeStars('leet**cod*e'), EXP: 'lecoe' });
