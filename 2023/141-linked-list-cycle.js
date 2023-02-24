const { Node, LinkedListUtils } = require("./utils/LinkedListUtils");
const { ListNodeConverter } = require("../2023/utils/ListNodeConverter");

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycleWithBestSolution = function (head) {

    /**
     * 只要確定 oneStep 的 next node 不是 null， twoStep 的 next node 也不是 null 的話
     * oneStep 還是一步一步向前走
     * twoStep 還是兩步兩步向前走
     * 它們總有一天會相撞 (修度A丟) ，就代表 是 一個 cycle list，並return true
     * 若兩者其中之一的 next node 為 null，就代表 不是 cycle list，並return false
     */

    let current = head
    let oneStep = current
    let twoStep = current
    while (twoStep && twoStep.next && twoStep.next.next) { // 要用快的指針來確認是否有值

        oneStep = oneStep.next
        twoStep = twoStep.next.next

        if (oneStep === twoStep) {
            return true
        }
    }
    return false
};

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    // 遍歷一次，將所有 node 存下來為 set，存入前先判斷有無於 set 中，如果有，那就是相同的 node
    let set = new Set([]);
    let current = head;
    while (current) {
        if (!set.has(current)) {
            set.add(current);
        } else {
            return true;
        }
        current = current.next;
    }
    return false;
};

/**
 * 測試
 */

/**
 * == Best Solution ==
 */
// let node = new Node(-1);
// let linkedlist1 = new LinkedListUtils();
// linkedlist1.appendNode(node);
// console.log("expect: false", "hasCycleWithBestSolution", hasCycleWithBestSolution(linkedlist1.head));

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let linkedlist = new LinkedListUtils();
// linkedlist.appendNode(node1);
// linkedlist.appendNode(node2);
// linkedlist.appendNode(node3);
// linkedlist.appendNode(node2);
// console.log("expect: true","hasCycleWithBestSolution", hasCycleWithBestSolution(linkedlist.head));

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(2);
// let linkedlist = new LinkedListUtils();
// linkedlist.appendNode(node1);
// linkedlist.appendNode(node2);
// linkedlist.appendNode(node3);
// linkedlist.appendNode(node4);
// console.log("expect: false","hasCycleWithBestSolution", hasCycleWithBestSolution(linkedlist.head));



/**
 * == My Solution ==
 */
// let node = new Node(-1);
// let linkedlist1 = new LinkedListUtils();
// linkedlist1.appendNode(node);
// console.log("hasCycle", hasCycle(linkedlist1.head));

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let linkedlist = new LinkedListUtils();
// linkedlist.appendNode(node1);
// linkedlist.appendNode(node2);
// linkedlist.appendNode(node3);
// linkedlist.appendNode(node2);
// console.log("hasCycle", hasCycle(linkedlist.head));

// let node1 = new Node(1);
// let node2 = new Node(2);
// let node3 = new Node(3);
// let node4 = new Node(2);
// let linkedlist = new LinkedListUtils();
// linkedlist.appendNode(node1);
// linkedlist.appendNode(node2);
// linkedlist.appendNode(node3);
// linkedlist.appendNode(node4);
// console.log("hasCycle", hasCycle(linkedlist.head));