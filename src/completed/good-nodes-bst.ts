import { TreeNode } from "../@types";

function goodNodes(root: TreeNode | null): number {
  let r = root?.val;
  let g = 0;

  const recur = (node: TreeNode | null, m = r) => {
      if (!node) return;
      if (node.val >= m! && node.val >= r!) {
          m = node.val;
          g++
      }
      
      recur(node.left, m);
      recur(node.right, m);
  }
  recur(root);

  return g;
};