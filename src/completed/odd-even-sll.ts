import { ListNode } from '../@types';

function oddEvenList(head: ListNode | null): ListNode | null {
  if (!head || !head.next || !head.next.next) return head;
  let odds: ListNode | null = head;
  let evens: ListNode | null = head.next;
  let evenHead = head.next;

  while (evens?.next && odds?.next) {
    odds.next = odds.next.next;
    evens.next = evens.next.next;
    odds = odds.next;
    evens = evens.next;
  }
  odds!.next = evenHead;
  return head;
}
