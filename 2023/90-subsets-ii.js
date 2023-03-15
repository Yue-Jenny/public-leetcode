/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
    let result = [];
    nums.sort();
    go(nums, 0, [], result);
    return result;
};

/**
 * 
 * @param {number[]} nums 
 * @param {number} trackingIndex 
 * @param {number[]} tempResult 
 * @param {number[][]} results 
 */
let go = function (nums, trackingIndex, tempResult, results) {
    results.push([...tempResult]);

    // Keep going
    for (let i = trackingIndex; i < nums.length; i++) {
        /**
         * 若陣列中有重複數字，會疊加出重複結果，因此我們需要去除重複結果。
         * 方式如下：
         * 一開始持續往後搜尋時候，i 和 trackingIndex 會相同數字。
         * 當遍歷到最尾端，要回來時候會經歷 pop，此時 trackingIndex 固定，而 i 會往上加。
         * 但是此時的 tempResult 會與先前重複，所以我們需要去除它。
         * 去除條件就是 i 已經和 trackingIndex 不同步，且當下第 i 個數值和前一個數值相同。
         */
        if (i != trackingIndex && nums[i] == nums[i - 1]) {
            continue;
        };

        // Push current value into temp result.
        tempResult.push(nums[i]);
        go(nums, i + 1, tempResult, results);
        tempResult.pop();


    }
}

/**
 * 測試
 */
// console.log(subsetsWithDup([1, 2, 2, 2, 2]));
// console.log(subsetsWithDup([1, 2, 2]));
// console.log(subsetsWithDup([1, 2, 3]));
// console.log(subsetsWithDup([0]));