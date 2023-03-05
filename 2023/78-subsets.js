/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let result = [];
    go(nums, [], 0, result);
    return result;
};

/**
 * 
 * @param {number[]} nums 
 * @param {number[]} tempNums 
 * @param {number} currentIndex
 * @param {number[][]} result
 * @param {number} resultIndex
 * @returns {number[][]}
 */
let go = function (nums, tempNums, currentIndex, result) {
    result.push([...tempNums]); // 參照問題，複製一個 tempNums，再放入結果中，以免後續改了 tempNums，全部的結果一併被改掉。ㄋ
    for (let i = currentIndex; i < nums.length; i++) {
        tempNums.push(nums[i]);
        currentIndex++;
        go(nums, tempNums, currentIndex, result);
        tempNums.pop();
    }
}

/**
 * 測試
 */
// console.log(subsets([1, 2, 3]));
// console.log(subsets([1, 2, 3, 4]));