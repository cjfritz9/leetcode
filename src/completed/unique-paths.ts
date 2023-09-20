function uniquePaths(m: number, n: number): number {
  const factorialize = (x: number) => {
    if (x <= 1) return 1;
    let res = x;
    while (x > 1) {
      x--;
      res *= x;
    }
    return res;
  };
  return factorialize(m + n - 2) / factorialize(m - 1) / factorialize(n - 1);
}

console.log({ RES: uniquePaths(3, 7), EXP: 28 });
console.log({ RES: uniquePaths(4, 8), EXP: 120 });
console.log({ RES: uniquePaths(8, 4), EXP: 120 });
console.log({ RES: uniquePaths(5, 10), EXP: 715 });
console.log({ RES: uniquePaths(10, 5), EXP: 715 });
console.log({ RES: uniquePaths(6, 10), EXP: 2002 });
