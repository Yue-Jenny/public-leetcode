/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    /** 
     * 先取出 strs 每一個元素，再取出第一個元素的第一個字母，
     * 與後續的元素的第一個字母相比，若比較完成後，都是符合的，就加入 commonPrefix 結果中
     * 接著，取出第一個元素的第二個字母，依照上述方式去比較
     * 直到有些元素的字母不同，則結束
     * */
    let commonPrefix = [];
    let organized = organize(strs);
    let checkedIndex = 0;
    let shortestWordLength = getShortestWordLength(strs);
    let stop = false;
    for (let j = 0; j < shortestWordLength; j++) {
        let result = [];
        for (let i = 0; i < organized.length; i++) {

            if (result.length == 0) {
                result.push(organized[i][checkedIndex]);
            } else {
                if (result[result.length - 1] == organized[i][checkedIndex]) {
                    // 檢查相同才放入 result 中
                    result.push(organized[i][checkedIndex]);
                } else {
                    // 檢查不相同，則終止流程
                    stop = true;
                    break;
                }
            }
        }
        if (stop) {
            break;
        }
        commonPrefix.push(result[0]);
        checkedIndex++;
    }

    return commonPrefix.join('');
};

/**
 * 
 * @param {string[]} strs 
 * @returns {Array}
 */
let organize = function (strs) {
    let organized = [];
    for (let i = 0; i < strs.length; i++) {
        let elements = strs[i].split('');
        organized.push(elements);
    }
    return organized;
}

/**
 * 
 * @param {string[]} strs 
 * @returns {number}
 */
let getShortestWordLength = function (strs) {
    let shortest = strs[0].length;
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < shortest) {
            shortest = strs[i].length;
        }
    }
    return shortest;
}
/**
 * 測試
 */
console.log(longestCommonPrefix(["flower", "flow", "flight"]));
console.log(longestCommonPrefix(["dog", "racecar", "car"]));