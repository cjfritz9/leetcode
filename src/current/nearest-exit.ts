function nearestExit(maze: string[][], entrance: number[]): number {
  let p = entrance;
  let s = Number.MAX_SAFE_INTEGER;
  
  let dist = 0;
  while (
    p[0] !== 0 &&
    p[1] !== 0 &&
    p[0] !== entrance[0] &&
    p[1] !== entrance[1]
  ) {
    if (maze[p[0] - 1][p[1]] !== '+') {
      
    }
  }

  console.log(maze[entrance[0]][entrance[1]]);
  return 0;
}

console.log({
  OUT: nearestExit(
    [
      ['+', '+', '.', '+'],
      ['.', '.', '.', '+'],
      ['+', '+', '+', '.']
    ],
    [1, 2]
  ),
  EXP: 1
});
console.log({
  OUT: nearestExit(
    [
      ['+', '+', '+'],
      ['.', '.', '.'],
      ['+', '+', '+']
    ],
    [1, 0]
  ),
  EXP: 2
});
console.log({ OUT: nearestExit([['.', '+']], [0, 0]), EXP: -1 });
