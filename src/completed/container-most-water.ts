// SOLUTION VIA EDITORIAL

function maxArea(height: number[]): number {
  let pl = 0;
  let pr = height.length - 1;
  let max = 0;
  let w = pr - pl;

  while (pl < pr) {
    w = pr - pl;
    max = Math.max(max, Math.min(height[pl], height[pr]) * w);

    if (height[pl] <= height[pr]) {
      pl++;
    } else {
      pr--;
    }
  }

  return max;
}

console.log({ RES: maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]), EXP: 49 });
console.log({ RES: maxArea([1, 1]), EXP: 1 });
