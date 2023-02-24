/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    const res = [];
    go(candidates, res, 0, [], 0, target);
    return res;

};

/**
 * 
 * @param {number[]} candidates 
 * @param {number[]} res 
 * @param {number} index 
 * @param {number[]} currentCandidates 
 * @param {number} sum 
 * @param {number} target 
 * @returns 
 */
const go = (candidates, res, index, currentCandidates, sum, target) => {
    if (sum === target) {
        res.push(currentCandidates);
        return;
    }

    if (sum > target) {
        return;
    }

    for (let i = index; i < candidates.length; i++) {
        let element = candidates[i];
        go(candidates, res, i, [...currentCandidates, element], sum + element, target);
    }

};

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSumMy = function (candidates, target) {
    candidates.sort((a, b) => a - b)
    const results = []
    backTrace(candidates, results, 0, [], 0, target)
    return results

};
/**
 * 
 * @param {number[]} candidates 
 * @param {number[]} results 
 * @param {number} curIdx 
 * @param {number[]} currentCandidate 
 * @param {number} currentSum 
 * @param {number} target 
 * @returns 
 */
const backTrace = (candidates, results, curIdx, currentCandidate, currentSum, target) => {
    if (currentSum === target) {
        results.push(currentCandidate)
        return
    } else if (currentSum > target) {
        return
    } else {

        for (let index = curIdx; index < candidates.length; index++) {
            const potentialElement = candidates[index];
            backTrace(candidates, results, index, [...currentCandidate, potentialElement], currentSum + potentialElement, target)
        }
    }
}

/**
 * 測試
 */
let candidates = [2, 3, 6, 7];
let target = 7;
console.log("result = ", combinationSum(candidates, target));

// Condition:
// 1. sum = target -> bingo
// 2. sum > target -> fail
// 3. 只會往後加跟自己相同大小或比較大的數字
