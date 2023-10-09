function eraseOverlapIntervals(intervals: number[][]): number {
  intervals.sort((a, b) => a[1] - b[1]);
  let h = Number.MIN_SAFE_INTEGER;
  let r = 0;

  for (let i = 0; i < intervals.length; i++) {
    let start = intervals[i][0];
    let end = intervals[i][1];

    if (start >= h) {
      h = end;
    } else {
      r++;
    }
  }

  return r;
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
console.log({
  RES: eraseOverlapIntervals([
    [-100, -2],
    [1, 2],
    [2, 3],
    [3, 4],
    [5, 7]
  ]),
  EXP: 0
});
