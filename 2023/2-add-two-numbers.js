/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbersBest = function (l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while (l1 !== null || l2 !== null || sum > 0) {

        // 分開加總，先加總 l1
        if (l1 !== null) {
            sum = sum + l1.val;
            l1 = l1.next;
        }
        // 再加總 l2
        if (l2 !== null) {
            sum = sum + l2.val;
            l2 = l2.next;
        }

        // 加總 >10 要進位
        if (sum >= 10) {
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        // 預設下一個 node 的值是 carry, 若是 1 表示因為有進位
        sum = carry;
        carry = 0;

    }

    return List.next;
};

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * 測試
 */
let node_1 = new ListNode(2);
node_1.next = new ListNode(3);
node_1.next.next = new ListNode(4);
let node_2 = new ListNode(5);

console.log("addTwoNumbersBest = ", addTwoNumbersBest(node_1, node_2));