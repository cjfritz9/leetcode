function popCount(x: number) {
  let count;
  for (count = 0; x != 0; ++count) {
    x &= x - 1;
  }
  return count;
}

function countBits(n: number) {
  let ans = [0];
  for (let i = 1; i <= n; ++i) {
    ans[i] = popCount(i);
  }
  return ans;
}

console.log({ RES: countBits(2), EXP: [0, 1, 1] });
console.log({ RES: countBits(5), EXP: [0, 1, 1, 2, 1, 2] });
