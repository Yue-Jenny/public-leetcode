/**
 * @param {number} n
 * @return {number[]}
 */
var countBitsBest = function (n) {

    /**
     * 規律是 2 的 n 次方都會只有一個 1，如 2->10, 4->100, 8->1000, 16->10000
     * 因此可以利用此項規律來計算每個數字對應的 binary 有幾個 1
     * 先判斷數字為 even or odd
     * even: 將(該數字/2)，找出除之後的數字所對應有幾個 1。如 6->6/2=3，只要確認 3 的 binary 有幾個 1 即可
     * odd: (該數字-1)/2+1，找出除之後的數字所對應有幾個 1，然後再 +1 就是此數字有幾個 1。如 7->(7-1)/2=3，3 有 2 個 1，再+1，共有 3 個 1
     */

    let result = [];
    for (let i = 0; i <= n; i++) {
        if (i == 0) {
            result.push(0);
        } else if (i == 1) {
            result.push(1);
        } else if (i % 2 == 0) {
            result.push(result[(i / 2)]);
        } else {
            result.push(result[((i - 1) / 2)] + 1);
        }
    }
    return result;
}
/**
 * 測試
 */
// console.log(countBitsBest(3));
// console.log(countBitsBest(5));
// console.log(countBitsBest(10));

/**
 * @param {number} n
 * @return {number[]}
 */
var countBitsMy = function (n) {
    // 先取得數字的 binary 後，再數出每個 binary 中有幾個 1，該結果存入 array 中
    let frequecyResults = [];
    for (let i = 0; i <= n; i++) {
        frequecyResults.push(sumFrequencyOfOneInBinary(i));
    }
    return frequecyResults;
};

/**
 * @param {number} number 
 * @returns {number}
 */
const sumFrequencyOfOneInBinary = (number) => {
    let binary = getBinary(number);
    let frequecySum = 0;
    for (let i = 0; i < binary.length; i++) {
        if (binary[i] === '1') {
            frequecySum++;
        }
    }
    return frequecySum;
}

/**
 * 
 * @param {number} number 
 * @returns {string}
 */
const getBinary = (number) => {
    let binary = number.toString(2);
    return binary;
};

/**
 * 測試
 */
// let bitsCount = countBitsMy(16);
// console.log("bitsCount", bitsCount);
