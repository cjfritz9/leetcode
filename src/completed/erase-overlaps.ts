function eraseOverlapIntervals(ivls: number[][]): number {
  const overlaps: number[] = [];
  for (let i = 0; i < ivls.length - 1; i++) {
    if (overlaps.includes(ivls[i][0]) || overlaps.includes(ivls[i][1])) {
      console.log('before', overlaps);
      overlaps.splice(overlaps.indexOf(ivls[i][0]), 1);
      overlaps.splice(overlaps.indexOf(ivls[i][1]), 1);
      console.log('after', overlaps);
    } else {
      overlaps.push(ivls[i][0], ivls[i][1]);
    }
  }
  return ivls.length;
}

console.log({
  RES: eraseOverlapIntervals([
    [1, 2],
    [2, 3],
    [3, 4],
    [1, 3]
  ]),
  EXP: 1
});
console.log({
  RES: eraseOverlapIntervals([
    [1, 2],
    [1, 2],
    [1, 2]
  ]),
  EXP: 2
});
console.log({
  RES: eraseOverlapIntervals([
    [1, 2],
    [2, 3]
  ]),
  EXP: 0
});
console.log({
  RES: eraseOverlapIntervals([
    [1, 100],
    [11, 22],
    [1, 11],
    [2, 12]
  ]),
  EXP: 2
});
