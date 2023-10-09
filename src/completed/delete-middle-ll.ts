//  Definition for singly-linked list.
class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}
// BETTER APPROACH FROM LEETCODE SOLUTION 
//
// function deleteMiddle(head: ListNode): ListNode | null {
//   let dummy = new ListNode(0, head)
//   let fast = dummy.next
//   let slow = dummy
//   while (fast != null && fast.next != null) {
//       console.log({fnn: fast.next.next})
//       fast = fast.next.next
//       slow = slow.next
//   }
//   console.log({dummy, slow, slownext: slow.next, snn: slow.next.next})
//   slow.next = slow.next.next
//   return dummy.next
// };

function deleteMiddle(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let length = 1;

  if (!head.next) {
      head = null;
      return head;
  }

  if (!head.next?.next) {
      head.next = null;
      return head;
  }

  const setLength = (head: ListNode) => {
    while (head.next) {
      head = head?.next;
      length++;
    }
  };
  setLength(head);
  const middle = Math.ceil(length / 2);

  let headRef = head;
  while (head?.next) {
    if (length === middle) {
      head.val = head.next.val;
      head.next = head.next.next ?? null;
    }
    length--;
    head = head?.next;
  }
  head = headRef;

  return head;
}
