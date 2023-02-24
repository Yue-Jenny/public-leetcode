/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    /**
     * 3^a = n
     * a = log(n)/log(3)
     * 若是 3 的 a 次方，所計算的結果 a 會很接近整數，故與四捨五入後的 a 差異很大
     */

    let a = Math.log(n) / Math.log(3)
    return Math.abs(a - Math.round(a)) < 1e-10
};

/**
 * 測試
 */
// console.log("27:", isPowerOfThree(27));
// console.log("28:", isPowerOfThree(28));
// console.log("29:", isPowerOfThree(29));
// console.log("0:", isPowerOfThree(0));
// console.log("-1:", isPowerOfThree(-1));