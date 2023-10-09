//  Definition for a binary tree node.
class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

const maxDepth = (root: TreeNode | null): number => {
  let max = 0;

  const recur = (node: TreeNode | null, count: number) => {
    if (!node) {
      return (max = Math.max(max, count));
    }
    recur(node.left, count + 1);
    recur(node.right, count + 1);
  };

  recur(root, max);

  return max;
};

console.log({
  RES: maxDepth({
    val: 3,
    left: { val: 9, left: null, right: null },
    right: {
      val: 20,
      left: { val: 15, left: null, right: null },
      right: { val: 7, left: null, right: null }
    }
  }),
  EXP: 3
});
