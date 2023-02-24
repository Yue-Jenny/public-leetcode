/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
    let prev = null
    let curr = head
    let next = null

    while (curr !== null) {
        // save next
        next = curr.next
        // reverse
        curr.next = prev
        // advance prev and curr
        prev = curr
        curr = next
    }
    return prev;
};

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * 測試
 */
let first = new ListNode(3, 4);
let second = new ListNode(2, first);
let third = new ListNode(1, second);

let result = reverseList(third);