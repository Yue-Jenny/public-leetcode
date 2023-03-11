/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUniqueBestSolution = function (nums) {
    let result = [];
    // 先排序，為了後續去重複的時候可以使用
    nums.sort();
    dfs(nums, [], result, Array.from(nums).fill(false));
    return result;
};

/**
 * @param {number[]} originalNums 
 * @param {number[]} tempResult
 * @param {number[][]} result
 * @param {number[]} used
 */
let dfs = function (originalNums, tempResult, result, used) {
    if (tempResult.length == originalNums.length) {
        result.push([...tempResult]);
    }

    for (let i = 0; i < originalNums.length; i++) {
        // 若為 true, 表示已使用過，直接略過
        if (used[i] == true) {
            continue;
        }

        // 將元素加入暫存結果中
        tempResult.push(originalNums[i]);

        // 標記為使用過
        used[i] = true

        dfs(originalNums, tempResult, result, used);

        // 將元素從暫存結果中移除
        tempResult.pop();

        // 標記為未使用過
        used[i] = false;

        //THIS WILL SKIP THE DUPLICATES AND EASY TO UNDERSTAND
        while (i < originalNums.length - 1 && originalNums[i] == originalNums[i + 1]) i++;
    }
}

/**
 * 測試
 */
console.log(permuteUniqueBestSolution([1, 1, 2]));
console.log(permuteUniqueBestSolution([1, 2, 3]));
