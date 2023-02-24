const { TreeNode, Tree } = require('./utils/TreeNode')

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {

    if (!root) {
        return false;
    }
    // 遍歷每一條路，沿路加總，若路途中加總已大於 target 則放棄此條路
    if (getSum(root, root.val, targetSum)) {
        return true;
    } else {
        return false;
    }
};

function getSum(tree, sum, targetSum) {
    if (tree.left) {
        let result = getSum(tree.left, sum + tree.left.val, targetSum);
        if (result) { return true };
    }
    if (tree.right) {
        let result = getSum(tree.right, sum + tree.right.val, targetSum);
        if (result) { return true };
    }
    if (!tree.left && !tree.right) {
        if (sum == targetSum) {
            return true;
        } else {
            return false;
        }
    }
}

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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSumMy = function (root, targetSum) {
    if (!root) {
        return false;
    }

    // 遍歷每一條路，沿路加總，若路途中加總已大於 target 則放棄此條路
    let pathSumResults = [];
    getSumMy(root, root.val, targetSum, pathSumResults)
    if (pathSumResults.includes(targetSum)) {
        return true;
    } else {
        return false;
    }

};

function getSumMy(tree, sum, targetSum, pathSumResults) {
    if (tree.left) {
        getSumMy(tree.left, sum + tree.left.val, targetSum, pathSumResults);
    }
    if (tree.right) {
        getSumMy(tree.right, sum + tree.right.val, targetSum, pathSumResults);
    }
    if (!tree.left && !tree.right) {
        pathSumResults.push(sum);
    }
}

/**
 * 測試
 */
// == CASE 1 ==
// let n1 = new TreeNode(5);
// let n2 = new TreeNode(4);
// let n3 = new TreeNode(11);
// let tree = new Tree();
// tree.root = n1
// n1.left = n2
// n1.right = n3
// let targetSum = 20;
// console.log(hasPathSum(tree.root, targetSum));
// console.log(hasPathSumMy(tree.root, targetSum));

// == CASE 2 ==
// let n1 = new TreeNode(5);
// let n2 = new TreeNode(4);
// let n3 = new TreeNode(11);
// let n4 = new TreeNode(2);
// let n5 = new TreeNode(7);
// let tree = new Tree();
// tree.root = n1
// n1.left = n2
// n2.left = n3
// n3.right = n4
// n3.left = n5
// let targetSum = 22;
// console.log(hasPathSum(tree.root, targetSum));
// console.log(hasPathSumMy(tree.root, targetSum));