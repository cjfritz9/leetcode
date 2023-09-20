/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

const guess = (g: number, s: number) => {
  if (g === s) {
    return 0;
  } else if (g > s) {
    return -1;
  } else {
    return 1;
  }
};

function guessNumber(n: number, S: number): number {
  let p = Math.floor(n / 2);
  let m = Math.ceil(p / 2);
  let g = undefined;
  if (n === 1) g = n;

  while (!g) {
    if (guess(p, S) === 0) {
      return (g = p);
    } else if (guess(p, S) === 1) {
      p += m;
    } else {
      p -= m;
    }
    m = Math.ceil(m / 2);
  }
  return g;
}

let S = 6;
// console.log({ RES: guessNumber(10, S), EXP: S });
// S = 1;
// console.log({ RES: guessNumber(1, S), EXP: S });
// S = 2;
// console.log({ RES: guessNumber(2, S), EXP: S });
// S = 50;
// console.log({ RES: guessNumber(1000, S), EXP: S });
// S = 4;
// console.log({ RES: guessNumber(4, S), EXP: S });
// S = 1;
// console.log({ RES: guessNumber(2, S), EXP: S });
S = 256;
console.log({ RES: guessNumber(20000, S), EXP: S });
