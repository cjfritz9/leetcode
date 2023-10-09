function findMaxAverage(nums: number[], k: number): number {
  let max = nums.slice(0, k).reduce((a, b) => a + b) / k;
  for (let i = 1; i < nums.length - k + 1; i++) {
    // const window = nums.slice(i, k + i);
    // console.log({ window, i, k });
    let c = nums.slice(i, k + i).reduce((a, b) => a + b) / k;
    max = Math.max(max, c);
  }
  return max;
}

console.log({ RES: findMaxAverage([1, 12, -5, -6, 50, 3], 4), EXP: 12.75 });
console.log({ RES: findMaxAverage([5], 1), EXP: 5.0 });
