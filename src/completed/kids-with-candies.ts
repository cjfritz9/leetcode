function kidsWithCandies(candies: number[], extraCandies: number): boolean[] {
  let h = 0;
  const res = [];

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] > h) {
      h = candies[i];
    }
  }

  for (let i = 0; i < candies.length; i++) {
    if (candies[i] + extraCandies >= h) {
      res.push(true);
    } else {
      res.push(false);
    }
  }

  return res;
}

console.log({
  RES: kidsWithCandies([2, 3, 5, 1, 3], 3),
  EXP: [true, true, true, false, true]
});
