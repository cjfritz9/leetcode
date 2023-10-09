function equalPairs(grid: number[][]): number {
  const map = new Map();

  for (let i = 0; i < grid.length; i++) {
    const nums = grid[i].join(',');
    map.set(nums, (map.get(nums) ?? 0) + 1);
  }

  let pairs = 0;

  for (let i = 0; i < grid.length; i++) {
    const col = [];
    for (let j = 0; j < grid.length; j++) {
      col.push(grid[j][i]);
    }
    const colKey = col.join(',');
    if (map.has(colKey)) {
      pairs += map.get(colKey);
    }
  }
  return pairs;
}

function equalPairs2(grid: number[][]): number {
  const rowMap = new Map<string, number>();
  for (let row of grid) {
    const key = row.join(',');
    rowMap.set(key, (rowMap.get(key) || 0) + 1);
  }

  let res = 0;
  for (let c = 0; c < grid.length; c++) {
    const column = [];
    for (let r = 0; r < grid[0].length; r++) {
      column.push(grid[r][c]);
    }
    const columnKey = column.join(',');
    if (rowMap.has(columnKey)) {
      res += rowMap.get(columnKey)!;
    }
  }

  return res;
}

console.log({
  RES: equalPairs([
    [3, 2, 1],
    [1, 7, 6],
    [2, 7, 7]
  ]),
  EXP: 1
});
console.log({
  RES: equalPairs([
    [3, 1, 2, 2],
    [1, 4, 4, 5],
    [2, 4, 2, 2],
    [2, 4, 2, 2]
  ]),
  EXP: 3
});
console.log({
  RES: equalPairs([
    [11, 1],
    [1, 11]
  ]),
  EXP: 2
});
console.log({
  RES: equalPairs([
    [13, 13],
    [13, 13]
  ]),
  EXP: 4
});
