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
 * @return {TreeNode}
 */

var invertTree = function (root) {
    // Base case...
    if (root == null) {
        return root
    }
    // Call the function recursively for the left subtree...
    invertTree(root.left)
    // Call the function recursively for the right subtree...
    invertTree(root.right)
    // swapping process...
    const curr = root.left
    root.left = root.right
    root.right = curr
    return root         // Return the root...   
};

let n1 = new TreeNode(5);
let n2 = new TreeNode(4);
let n3 = new TreeNode(11);
let n4 = new TreeNode(2);
let n5 = new TreeNode(7);
let tree = new Tree();
tree.root = n1
n1.left = n2
n2.left = n3
n3.right = n4
n3.left = n5

console.log(JSON.stringify(invertTree(tree.root)));