function findDifference(nums1: number[], nums2: number[]): number[][] {
  const [s1, s2] = [new Set(nums1), new Set(nums2)];
  return [[...s1].filter((n) => !s2.delete(n)), [...s2]];
}

console.log(findDifference([1, 2, 3], [2, 4, 6]));
console.log(findDifference([-68, -80, -19, -94, 82, 21, -43], [-63]));
