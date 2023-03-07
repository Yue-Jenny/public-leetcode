/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let result = [];
    let tempResult = [];

    go(s, result, tempResult);

    return result;
};

/**
 * 
 * @param {string} s 
 * @param {string[][]} result 
 * @param {string[]} tempResult 
 */
let go = function (s, result, tempResult) {
    /**
     * 先搜尋每次一個
     * 再搜尋每次兩個
     * 再搜尋每次三個
     * ... etc
     * 
     * 終止條件：當要進行遍歷的 s 是空字串的時候，表示已經遍歷到最底了，將 temp result 加入 result 中
     */

    // 終止條件：當要進行遍歷的 s 是空字串的時候，表示已經遍歷到最底了，將 temp result 加入 result 中
    if (s.length == 0) {
        result.push([...tempResult]);
    }

    for (let i = 1; i <= s.length; i++) {
        let current = s.substring(0, i);
        let remain = s.substring(i);

        // 如果 current 是 polindrome, 則將探索後續的字串
        if (current == current.split("").reverse().join("")) {
            tempResult.push(current);
            go(remain, result, tempResult);
            tempResult.pop();
        }
    }
}

console.log(partition("aab"));