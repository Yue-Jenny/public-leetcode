// ES6 時期的 Constructor
class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val
        this.left = left
        this.right = right
    }
}

class Tree {
    constructor() {
        this.root = null
    }
}

module.exports = {
    TreeNode,
    Tree
}