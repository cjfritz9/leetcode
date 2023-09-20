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

const searchBST = (root: TreeNode | null, val: number): TreeNode | null => {
  let res = null;

  const recur = (node: TreeNode | null) => {
    if (!node) return;

    if (node.val === val) {
      res = node;
    }

    recur(node.left);
    recur(node.right);
  }

  recur(root);

  return res;
};
