function longestSubarray(nums: number[]): number {
  let leftIndex = -1;
  let zeroPosition = -1;
  let zeroCount = 0;
  let max = 0;
  for (let index = 0; index < nums.length; index++) {
    if (nums[index] == 0) {
      if (zeroCount == 1) {
        leftIndex = zeroPosition;
      } else {
        zeroCount = 1;
      }
      zeroPosition = index;
    }
    max = Math.max(max, index - leftIndex - 1);
  }
  return max;
}

console.log({ RES: longestSubarray([1, 1, 0, 1]), EXP: 3 });
console.log({ RES: longestSubarray([0, 1, 1, 1, 0, 1, 1, 0, 1]), EXP: 5 });
console.log({ RES: longestSubarray([1, 1, 0, 0, 1, 1, 1, 0, 1]), EXP: 4 });
console.log({ RES: longestSubarray([0, 0, 1, 1]), EXP: 2 });
