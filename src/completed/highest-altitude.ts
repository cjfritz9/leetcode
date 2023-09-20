function largestAltitude(gain: number[]): number {
  let h = gain[0];

  for (let i = 1; i < gain.length; i++) {
    gain[i] = gain[i - 1] + gain[i];
    if (gain[i] > h) {
      h = gain[i];
    }
  }
  return h > 0 ? h : 0;
}

console.log({ OUT: largestAltitude([52,-91,72]), EXP: 52 });
console.log({ OUT: largestAltitude([-5, 1, 5, 0, -7]), EXP: 1 });
console.log({ OUT: largestAltitude([-4,-3,-2,-1,4,3,2]), EXP: 0 });