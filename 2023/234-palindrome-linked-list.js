const { Node, LinkedListUtils } = require("./utils/LinkedListUtils");

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var isPalindromeBest = function (head) {
    let slow = head, fast = head, prev, temp
    while (fast && fast.next)
        slow = slow.next, fast = fast.next.next
    prev = slow, slow = slow.next, prev.next = null
    while (slow)
        temp = slow.next, slow.next = prev, prev = slow, slow = temp
    fast = head, slow = prev
    while (slow)
        if (fast.val !== slow.val) return false
        else fast = fast.next, slow = slow.next
    return true
};

/**
 * 測試
 */
let node1 = new Node(1);
let node2 = new Node(2);
let node3 = new Node(2);
let node4 = new Node(1);
let linkedlist = new LinkedListUtils();
linkedlist.appendNode(node1);
linkedlist.appendNode(node2);
linkedlist.appendNode(node3);
linkedlist.appendNode(node4);
console.log(isPalindromeBest(linkedlist.head));

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindromeMy = function (head) {

    /**
     * 從頭和尾各自有一個指標
     * 頭往後走，尾往前走，比較值，若相同，則繼續，直到兩個指標的 index 相差 1
     * 若不同，則回傳 false
     */

    let current = head;
    let values = [];
    while (current) {
        values.push(current.val);
        current = current.next;
    }

    let firstIdx = 0;
    let secondIdx = values.length - 1;
    let firstIdxValue = values[firstIdx];
    let secondIdxValue = values[secondIdx];

    while (firstIdx < values.length / 2) {
        if (firstIdxValue == secondIdxValue) {
            firstIdx++;
            firstIdxValue = values[firstIdx];
            secondIdx--;
            secondIdxValue = values[secondIdx];
        } else {
            return false;
        }
    }
    return true;
};

/**
 * 測試
 */
// == CASE 1 ==
// let node1 = new Node(1);
// let node2 = new Node(2);
// let linkedlist = new LinkedListUtils();
// linkedlist.appendNode(node1);
// linkedlist.appendNode(node2);
// console.log(isPalindromeMy(linkedlist.head));

// == CASE 2 ==
// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(2);
// let node4 = new Node(1);
// let linkedlist = new LinkedListUtils();
// linkedlist.appendNode(node1);
// linkedlist.appendNode(node2);
// linkedlist.appendNode(node3);
// linkedlist.appendNode(node4);
// console.log(isPalindromeMy(linkedlist.head));