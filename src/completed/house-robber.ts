function rob(nums: number[]): number {
  if (nums.length === 0) return 0;
  const N = nums.length;

  const maxRobbedAmount = Array(nums.length + 1).fill(0);

  maxRobbedAmount[N - 1] = nums[N - 1];

  for (let i = N - 2; i >= 0; i--) {
    maxRobbedAmount[i] = Math.max(
      maxRobbedAmount[i + 1],
      maxRobbedAmount[i + 2] + nums[i]
    );
  }

  return maxRobbedAmount[0];
}

console.log({ RES: rob([1, 2, 3, 1]), EXP: 4 });
console.log({ RES: rob([2, 7, 9, 3, 1]), EXP: 12 });
