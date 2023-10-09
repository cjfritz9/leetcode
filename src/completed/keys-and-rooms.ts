function canVisitAllRooms(rooms: number[][]): boolean {
  let queue: number[] = [0];
  let visited = new Set();

  while (queue.length) {
    let curr = queue.shift()!;
    if (visited.has(curr)) continue;
    for (let k of rooms[curr]) {
      queue.push(k);
    }
    visited.add(curr);
  }

  return visited.size === rooms.length;
}

console.log({ RES: canVisitAllRooms([[1], [2], [3], []]), EXP: true });
console.log({
  RES: canVisitAllRooms([[1, 3], [3, 0, 1], [2], [0]]),
  EXP: false
});
console.log({ RES: canVisitAllRooms([[2, 3], [], [2], [1, 3]]), EXP: true });
console.log({
  RES: canVisitAllRooms([
    [4],
    [3],
    [],
    [2, 5, 7],
    [1],
    [],
    [8, 9],
    [],
    [],
    [6]
  ]),
  EXP: false
});
