function productExceptSelf(nums: number[]): number[] {
  // answer array, initialized with a value of 1
  const output = [1];

  // traverse the array and set the output values to
  // the product of the previous number and previous 
  // output item (total product)
  for (let i = 0; i < nums.length; i++) {
    output[i + 1] = nums[i] * output[i];
  }
  // traverse the array from the right and multiply each
  // item by the value set in right pointer, this time
  // overwriting the initial value {{output[0] = 1}}
  // and return the output of products
  let right = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = output[i] * right;
    right *= nums[i];
  }
  return output;
}

console.log(productExceptSelf([1, 2, 3, 4]));
console.log(productExceptSelf([-1, 1, 0, -3, 3]));
console.log(productExceptSelf([4, 5, 1, 8, 2, 10, 6]));
