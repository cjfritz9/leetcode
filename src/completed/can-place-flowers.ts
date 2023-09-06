function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  if (n === 0) return true;
  for (let i = 0; i < flowerbed.length; i++) {
    if (
      flowerbed[i] === 0 &&
      (flowerbed[i - 1] === 0 || flowerbed[i - 1] === undefined) &&
      (flowerbed[i + 1] === 0 || flowerbed[i + 1] === undefined)
    ) {
      flowerbed[i] = 1;
      n--;
    }
    if (n === 0) return true;
  }

  return false;
}

console.log({ RESULT: canPlaceFlowers([1, 0, 0, 0, 1], 1), EXPECTED: true });
console.log({ RESULT: canPlaceFlowers([1, 0, 0, 0, 1], 2), EXPECTED: false });
console.log({ RESULT: canPlaceFlowers([1, 0, 0, 0, 1], 2), EXPECTED: false });
console.log({
  RESULT: canPlaceFlowers([1, 0, 0, 0, 0, 1], 2),
  EXPECTED: false
});
console.log({ RESULT: canPlaceFlowers([0, 0, 1, 0, 1], 1), EXPECTED: true });
console.log({
  RESULT: canPlaceFlowers([1, 0, 0, 0, 1, 0, 0], 2),
  EXPECTED: true
});
