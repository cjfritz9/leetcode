// function increasingTriplet(nums: number[]): boolean {
//   let pointer1 = 0;
//   let pointer2 = 1;

//   let matchedVals = 1;

//   while (pointer2 < nums.length) {
//     // console.log(nums[pointer1], nums[pointer2]);
//     // console.log('p1 p2',pointer1, pointer2);
//     // console.log(matchedVals);
//     if (matchedVals > 2) return true;

//     if (nums[pointer1] < nums[pointer2]) {
//       console.log('comp', nums[pointer1], nums[pointer2]);
//       pointer1 = pointer2;
//       matchedVals++;
//     }

//     pointer2++;
//   }
//   return false;
// }

function increasingTriplet(nums: number[]): boolean {
  let l = Number.MAX_SAFE_INTEGER, nl = l;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < l) {
      l = nums[i];
    }
    if (nums[i] < nl && nums[i] > l) {
      nl = nums[i];
    }
    if (nums[i] > l && nums[i] > nl) {
      return true;
    }
  }
  return false;
}

console.log(increasingTriplet([1, 2, 3, 4, 5]), 'true');
console.log(increasingTriplet([5, 4, 3, 2, 1]), 'false');
console.log(increasingTriplet([0, 4, 2, 1, 0, -1, -3]), 'false');
console.log(increasingTriplet([6, 7, 1, 2]), 'false');
console.log(increasingTriplet([2, 1, 5, 0, 4, 6]), 'true');
console.log(increasingTriplet([1, 2, 1, 3]), 'true');
