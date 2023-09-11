function longestOnes(nums: number[], k: number): number {
  let i = 0,
    j = 0;

  while (j < nums.length) {
    if (nums[j] === 0) {
      k--;
    }
    if (k < 0) {
      if (nums[i] === 0) {
        k++;
      }
      i++;
    }
    j++;
  }

  return j - i;
}

console.log({ OUT: longestOnes([1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0], 2), EXP: 6 });
console.log({
  OUT: longestOnes(
    [0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 1, 1, 1, 1],
    3
  ),
  EXP: 10
});
