/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var mergeBest = function (nums1, m, nums2, n) {
    var insertPositionOfNums1 = m + n - 1;
    m -= 1;
    n -= 1;
    while (n >= 0) {
        if (nums1[m] > nums2[n]) {
            nums1[insertPositionOfNums1] = nums1[m];
            m -= 1;
        } else {
            nums1[insertPositionOfNums1] = nums2[n];
            n -= 1;
        }
        insertPositionOfNums1 -= 1;
    }
    return nums1;
};

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var mergeMy = function (nums1, m, nums2, n) {
    let nums2StartIdx = 0

    // 遍歷 nums1
    for (let i = 0; i < nums1.length; i++) {
        // 當 nums2 的數字比 nums1[i] 的小
        if (nums1[i] > nums2[nums2StartIdx]) {
            // 將 nums2 的數字塞到 nums1 的第 m 個
            nums1[m] = nums2[nums2StartIdx]

            // 從 m 開始往前 swap，直到第 i 個數字
            for (let j = m; j > i; j--) {
                [nums1[j], nums1[j - 1]] = [nums1[j - 1], nums1[j]]
            }
            m++
            nums2StartIdx++

            // 當遍歷完有數字的 nums1 之後，表示 nums2 的數字都比 nums1 的，直接將 nums2 的數字往 nums1 的後面塞即可  
        } else if (i >= m) {
            nums1[m] = nums2[nums2StartIdx]
            m++
            nums2StartIdx++
        }
    }

    return nums1;
};

/**
 * 測試
 */
console.log(mergeBest([2, 0], 0, [1], 1));
console.log(mergeBest([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(mergeBest([0], 0, [1], 1));
console.log(mergeBest([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));

console.log(mergeMy([2, 0], 0, [1], 1));
console.log(mergeMy([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
console.log(mergeMy([0], 0, [1], 1));
console.log(mergeMy([4, 5, 6, 0, 0, 0], 3, [1, 2, 3], 3));