/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    /**
     * 1. filter 大於 target 與 重複
     * 2. sort
     * 3. 開始累加，若結果與 target 相同，則加入最終結果中
     */
    if (!candidates || candidates.length == 0) return [];

    let processedCandidates = [];
    processedCandidates = candidates.filter(function (e) {
        return e < target || e == target;
    }
    )
    processedCandidates = processedCandidates.sort((a, b) => {
        return a - b;
    });

    let result = [];
    go(processedCandidates, target, [], result, 0, 0);
    return result;
};
/**
 * 
 * @param {number[]} processedCandidates 
 * @param {number} target 
 * @param {number[]} tempResult 
 * @param {number[][]} result
 * @param {number} trackIndex
 * @param {number} sum
 */
let go = function (processedCandidates, target, tempResult, result, trackIndex, sum) {
    if (sum == target) {
        // 得到答案，不需要繼續搜集
        result.push([...tempResult]);
        return;
    }

    for (let i = trackIndex; i < processedCandidates.length; i++) {
        //already return, go next loop(not recursion)
        if (i != trackIndex && processedCandidates[i] == processedCandidates[i - 1]) {
            continue
        };

        if (sum > target) {
            // 總合已大於目標，不需要繼續搜集
            return;
        }

        // 繼續搜集
        tempResult.push(processedCandidates[i]);
        let nextIndex = i + 1; // 不能使用 i++, 會針對現在此迴圈的 i 加一
        let newSum = sum + processedCandidates[i];
        go(processedCandidates, target, tempResult, result, nextIndex, newSum);
        tempResult.pop();
    }
}

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8));
console.log(combinationSum2([2, 5, 2, 1, 2], 5));
console.log(combinationSum2([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1], 30));
