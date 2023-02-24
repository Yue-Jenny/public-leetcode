// see: https://medium.com/@nchuuu/linked-list-es6-javascript%E5%AF%A6%E4%BD%9C%E5%8F%8Aleet-code%E9%A1%8C%E7%9B%AE%E8%A7%A3%E6%9E%90-4afcd9a67b3d
class LinkedListUtils {
    constructor() {
        // 為 List 加入一些參數如 length ，便於後續操作。
        this.length = 0;
        // 鏈結串列的起始位置 head
        this.head = null;
    }

    // add node to the tail
    append(item) {

        // 新增一個 node 
        let newNode = new Node(item);

        // 如果 head 是 null，表示 new node 就是 head 要指向的 node
        if (!this.head) {
            this.head = newNode;
        } else {
            // 如果 head 不是 null，表示需要去找到最後一筆 node，再將最後一筆 node 的 next 指向 new node
            let tail = this.head;
            while (tail.next != null) {
                tail = tail.next;
            }

            tail.next = newNode;

            this.length++;
        }

    }

    // add new node to the tail
    appendNode(newNode) {

        // 如果 head 是 null，表示 new node 就是 head 要指向的 node
        if (!this.head) {
            this.head = newNode;
        } else {
            // 如果 head 不是 null，表示需要去找到最後一筆 node，再將最後一筆 node 的 next 指向 new node
            let tail = this.head;
            while (tail.next != null) {
                tail = tail.next;
            }

            tail.next = newNode;

            this.length++;
        }

    }

    // remove node
    removeAt(index) {

        let current = this.head; // 都要加 this

        let at = 0; // 先假設在 head 位置上

        let prev = null; // 遍歷的時候要用的

        // index 為 0，表示要刪除第一個 node，需要將 head 的 next 指向第二個 node (index = 1)
        // == 比較 value 而已，若要比較 reference&value 要用 ===
        if (index == 0) {
            this.head = current.next;

        } else {

            while (at++ < index) {
                prev = current;
                current = current.next;
            }

            // current.next = null; // 錯了 這樣只能適用於刪除最後一個節點

            // 將前一個節點之 next 欄位指向下一個節點
            prev.next = current.next;
        }
        this.length--;
    }

    // insert an item into specific index
    insertAt(index, item) {
        // current 目前位置
        let current = this.head;
        // current 的前一個位置指標，insert new node 會使用到
        let prev = null;
        // 目前的 index
        let at = 0;

        // 創建一個 new node 
        let newNode = new Node(item);

        // index = 0 的情況
        if (index == 0) {
            this.head = newNode;// 重新安排 head 位置
            newNode.next = current;
        } else {
            // index != 0 的情況

            // 遍歷
            while (at++ < index) {
                // current 指標往後移動
                console.log("at=", at);
                console.log("index=", index);

                prev = current;

                current = current.next;
                console.log("current", JSON.stringify(current));

            }

            // prev 的 next 指向 new node
            prev.next = newNode;

            // new node 的 next 指向 current
            newNode.next = current;

        }

    }

}

class Node {
    constructor(val) {
        // Node 節點以 item 存放資料。
        this.val = val;
        // Node 節點以 next 作為指標，指向下一個 Node。
        this.next = null;
    }
}

module.exports = {
    LinkedListUtils,
    Node
}