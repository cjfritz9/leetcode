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

function rightSideView(root: TreeNode | null): number[] {
  const result: number[] = [];

  function dfs(node: TreeNode | null, depth: number) {
    if (!node) {
      return;
    }
    // in js, 0 != null,
    // so this only pass for both undefined and null
    if (result[depth] == null) {
      result.push(node.val);
    }
    if (node.right) {
      dfs(node.right, depth + 1);
    }
    if (node.left) {
      dfs(node.left, depth + 1);
    }
  }

  dfs(root, 0);
  return result;
}
