function uniqueOccurrences(arr: number[]): boolean {
  const map = new Map();

  for (let i = 0; i < arr.length; i++) {
    if (map.has(arr[i])) {
      map.set(arr[i], map.get(arr[i]) + 1);
    } else {
      map.set(arr[i], 1);
    }
  }
  const set = new Set(map.values());

  if (set.size !== map.size) {
    return false;
  }

  return true;
}

console.log({ RES: uniqueOccurrences([1, 2, 2, 1, 1, 3]), EXP: true });
console.log({ RES: uniqueOccurrences([1, 2]), EXP: false });
console.log({ RES: uniqueOccurrences([-3,0,1,-3,1,1,1,-3,10,0]), EXP: true });
