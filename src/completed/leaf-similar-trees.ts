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

function leafSimilar(root1: TreeNode | null, root2: TreeNode | null): boolean {
  const leafs1: number[] = [];
  const leafs2: number[] = [];

  const recur = (node: TreeNode | null, leafs: number[]) => {
    if (!node) return;

    if (!node.left && !node.right) {
      leafs.push(node.val);
    }

    recur(node.left, leafs);
    recur(node.right, leafs);
  }

  recur(root1, leafs1);
  recur(root2, leafs2);

  if (leafs1.length !== leafs2.length) {
    return false;
  }

  for (let i = 0; i < leafs1.length; i++) {
    if (leafs1[i] !== leafs2[i]) {
      return false;
    }
  }

  return true;
}
