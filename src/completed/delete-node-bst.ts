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

function deleteNode(root: TreeNode | null, key: number): TreeNode | null {
  const recur = (node: TreeNode | null) => {
    if (!node) return;

    if (node.val === key) {
      node.val = node.right?.val ?? node.left?.val ?? 0;
      while (node.left) {
        node.val = node.left.val;
        node = node?.left;
      }
    }

    recur(node!.left);
    recur(node!.right);
  };
  recur(root);
  return root;
}

const root = {
  val: 5,
  left: {
    val: 3,
    left: { val: 2, left: null, right: null },
    right: { val: 4, left: null, right: null }
  },
  right: { val: 6, left: null, right: { val: 7, left: null, right: null } }
};

console.debug({ RES: deleteNode(root, 3), EXP: null });
