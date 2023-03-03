/**
 * 
 * @param {number[]} nums 
 * @returns {number[][]}
 */
const permuteByInsertElement = nums => {
    let result = [];
    result.push([nums[0]]);

    for (let i = 1; i < nums.length; i++) {
        let newResult = [];

        for (let j = 0; j < result.length; j++) {
            for (let m = 0; m <= i; m++) {
                let list = result[j].slice();
                list.splice(m, 0, nums[i]);// 在不同位置插入 element
                newResult.push(list);
            }
        }

        result = newResult;
    }

    return result;
};

/**
 * 測試
 */
// let nums = [];
// nums = [1, 2, 3, 4];
// nums = [1, 2, 3];
// nums = [1, 2];
// console.log(permuteByInsertElement(nums));


/**
 * @param {number[]} letters
 * @return {number[][]}
 */
var permute = function (letters) {
    let res = [];
    dfs(letters, [], Array(letters.length).fill(false), res);
    return res;
}

function dfs(letters, path, used, res) {
    if (path.length == letters.length) {
        // make a deep copy since otherwise we'd be append the same list over and over
        res.push(Array.from(path));
        return;
    }
    for (let i = 0; i < letters.length; i++) {
        // skip used letters
        if (used[i]) {
            continue
        };
        // add letter to permutation, mark letter as used
        path.push(letters[i]);
        used[i] = true;
        /*
        * 帶著 path(可以視為暫存結果), used 標示是否已用過(若第 n 個元素已用過, 後續執行遍歷會跳過)等資訊進遍歷
        */
        dfs(letters, path, used, res);
        // remove letter from permutation, mark letter as unused
        path.pop();
        used[i] = false;
    }
}
/**
 * 測試
 */
// let nums = [1, 2, 3, 4];
// let nums = [1, 2, 3];
// let nums = [1, 2];
// console.log(permute(nums));
