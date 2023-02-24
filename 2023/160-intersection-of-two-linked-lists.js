const { LinkedListUtils } = require("../2023/utils/LinkedListUtils")
const { ListNodeConverter } = require("../2023/utils/ListNodeConverter")

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNodeWithBestSolution = function (headA, headB) {

    /** 
     * 邏輯說明: 假設 headA 長度為 LA，headB 長度為 LB，共同 node 長度為 C
     * 第一條 = LA + C
     * 第二條 = LB + C
     * 
     * 將兩條各自再跟另一條組合，會顯示為以下:
     * LA + C + LB + C
     * LB + C + LA + C
     * 可看到 LA + C + LB = LB + C + LA，假設稱作這部分為 Z，所以當這兩條各自的指標走完 Z 後，再來就一定是共同 node 的 C
    */


    let a = headA;
    let b = headB;


    while (a != b) {
        if (a != null) {
            a = a.next
        } else {
            a = headB
        }

        if (b != null) {
            b = b.next
        } else {
            b = headA
        }

    }

    return b
}

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNodeMy = function (headA, headB) {

    // headA 的第一個去遍歷 headB 全部 -> headA 的第二個去遍歷 headB 全部 -> ... -> headA 的第N個去遍歷 headB 全部
    let currentA = headA;
    while (currentA) { // while not null
        let currentB = headB;

        while (currentB) {
            // 比較 reference，相同才是代表同一個 node (節點)
            if (currentA === currentB) {
                return currentB
            }

            currentB = currentB.next
        }

        currentA = currentA.next;
    }

    return null;

};

let headAarray = [5, 4, 3, 2, 1]
let converterForA = new ListNodeConverter(headAarray)
let headA = converterForA.convertToLinkedList()
console.log(JSON.stringify(headA));

let headBarray = [10, 9, 8, 7, 6, 5]
let converterForB = new ListNodeConverter(headBarray)
let headB = converterForB.convertToLinkedList()
console.log(JSON.stringify(headB));

console.log(getIntersectionNodeMy(headA, headB));
console.log(getIntersectionNodeWithBestSolution(headA, headB));