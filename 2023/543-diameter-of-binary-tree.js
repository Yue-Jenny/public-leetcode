const { TreeNode } = require('./utils/TreeNode')
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function (root) {
    let diameter = 0;

    dfs(root);

    return diameter;

    function dfs(node) {
        if (!node) return 0;

        const left = dfs(node.left);
        const right = dfs(node.right);

        // update diameter at every node
        // 找出 所有節點的 left MaxDepth 及 所有節點的 right MaxDepth 相加最大值。因為會有這種奇怪情況，最長路徑不經過 root，所以要全部都掃過。
        diameter = Math.max(diameter, left + right);

        // update the largest number of edge so far
        // 需要考慮當前節點的邊，所以我們將 1 加上左子樹高度 left 和右子樹高度 right 的最大值，這樣就得到了以當前節點為根的子樹的高度。
        return 1 + Math.max(left, right);
    }
};



// == CASE 1 ==
let n1 = new TreeNode(5);
let n2 = new TreeNode(4);
let n3 = new TreeNode(11);
let tree = new Tree();
tree.root = n1
n1.left = n2
n1.right = n3
let result = diameterOfBinaryTree(tree.root);
console.log(result);