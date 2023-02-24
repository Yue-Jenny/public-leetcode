function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
    if (!head) return null;
    var tail = head;

    // 尋找此 group 的最尾端 tail
    for (var i = 1; i < k; i++) { // 從第 1 ~ 第 k 個 node 開始遍歷
        tail = tail.next;
        if (!tail) return head;// 若 tail 為 null, 則 return head
    }

    // 設定 next 參數為 tail 的 next, 提供下一組 group 的開頭
    var next = tail.next;

    // tail 指向 null
    tail.next = null;

    // 將 head -> head.next 變成 head <- head.next, 這邊會去反轉整組
    reverse(head);

    // head 會接上 下一個反轉 k group
    let reverseKGroupResult = reverseKGroup(next, k);
    head.next = reverseKGroupResult; // head 接上 reverseKGroupResult

    return tail;
}

// curr 等於 head
function reverse(curr) {
    var prev = null;
    while (curr) {
        var next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
}

function linkedList(arr) {
    return arr.reduceRight((next, value) => ({ value, next }), null);
}

/**
 * 測試
 */
let array = [1, 2, 3, 4, 5];
let linkedListResult = linkedList(array);
let result = reverseKGroup(linkedListResult, 2);
console.log("result = ", result);