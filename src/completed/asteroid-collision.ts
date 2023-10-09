// function asteroidCollision(asteroids: number[]): number[] {
//   const stack: number[] = [];

//   for (let asteroid of asteroids) {
//     let flag = true;

//     while (stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0) {
//       if (Math.abs(stack[stack.length - 1]) < Math.abs(asteroid)) {
//         stack.pop();
//         continue;
//       } else if (Math.abs(stack[stack.length - 1]) == Math.abs(asteroid)) {
//         stack.pop();
//       }

//       flag = false;
//       break;
//     }

//     if (flag) {
//       stack.push(asteroid);
//     }
//   }

//   const remainder: number[] = [];

//   for (let i = stack.length - 1; i >= 0; i--) {
//     remainder[i] = stack.pop()!;
//   }

//   return remainder;
// }

const asteroidCollision = (asteroids: number[]): number[] => {
  const ans: number[] = [];
  const stack: number[] = [];

  for (let asteroid of asteroids) {
    if (asteroid > 0) {
      stack.push(asteroid);
    } else {
      while (
        stack.length > 0 &&
        stack[stack.length - 1] < Math.abs(asteroid)
      ) {
        stack.pop();
      }
      if (stack.length === 0) {
        ans.push(asteroid);
      } else {
        if (stack[stack.length - 1] == Math.abs(asteroid)) {
          stack.pop();
        }
      }
    }
  }

  ans.push(...stack);

  return ans;
};

console.log({ RES: asteroidCollision([5, 10, -5]), EXP: [5, 10] });
console.log({ RES: asteroidCollision([8, -8]), EXP: [] });
console.log({ RES: asteroidCollision([10, 2, -5]), EXP: [10] });

// a. If the `asteroid` is bigger than the asteroid on the top,
// then this asteroid on the top will explode, and we will pop it from the stack.

// b. If the `asteroid` has the same size as the asteroid on the top,
// then both will explode. Hence we will pop it from the stack;
// also, we will mark `flag` as `false` because this `asteroid`
// will also explode, and hence we won't save it into the stack.

// c. If the `asteroid` is smaller than the asteroid on the top,
// then the asteroid on the top will not explode, so we will not pop it.
// But the `asteroid` will explode and thus we will mark`flag` as `false`.
