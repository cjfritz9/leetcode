/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  nums.sort((_, b) => (b !== 0 ? 1 : -1));
}

console.log(moveZeroes([0, 3, 1, 0, 3, 12]));
