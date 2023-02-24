/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    return binarySearch(nums, target, 0, nums.length - 1);
};


function binarySearch(array, target, start, end) {
    // If the target is less then the very last item then insert it at that item index
    // because anything index less then that has already been confirmed to be less then the target.
    // Otherwise insert it at that item index + 1
    // because any index grater then that has already been confirmed to be greater then the target
    if (start > end) return start;

    const midPoint = Math.floor((start + end) / 2);

    // found target
    if (array[midPoint] === target) return midPoint;

    // search the left side
    if (array[midPoint] > target) return binarySearch(array, target, start, midPoint - 1);
    // search the right side
    if (array[midPoint] < target) return binarySearch(array, target, midPoint + 1, end);
}

/**
 * 測試
 */
let result1 = searchInsert([1, 3], 2);
console.log(`result1 : ${result1}`);

let result2 = searchInsert([1, 3, 5], 2);
console.log(`result2 : ${result2}`);

let result3 = searchInsert([1, 3, 5, 7], 2);
console.log(`result3 : ${result3}`);

let result4 = searchInsert([1, 3, 5, 7], 0);
console.log(`result4 : ${result4}`);

let result5 = searchInsert([1, 3, 5, 7], 9);
console.log(`result5 : ${result5}`);

let result6 = searchInsert([1, 3, 5, 7], 5);
console.log(`result6 : ${result6}`);