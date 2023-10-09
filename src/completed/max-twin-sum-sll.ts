import { ListNode } from '../@types';

function pairSum(head: ListNode | null): number {
  if (!head) return 0;
  let dummy: ListNode | null = new ListNode(head.val, head.next);
  let m = 0;
  const vals: number[] = [];

  while (dummy) {
    vals.push(dummy.val);
    dummy = dummy.next;
  }

  const revVals = vals.slice().reverse();

  for (let i = 0; i < vals.length; i++) {
    let sum = vals[i] + revVals[i];
    if (m < sum) {
      m = sum;
    }
  }

  console.log({ vals, revVals });

  return m;
}
