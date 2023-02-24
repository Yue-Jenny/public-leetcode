/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    /**
     * 將數字拆解(用 string 讀取)，並持續依照規則將數字加總並存到 set 中，
     * 若 set 中已有重複，且過程中都沒有為 1 的情境，表示非 happy number
     */
    let sumsSet = new Set([]);

    // 當 sumSet 不包含 1，break & return false 條件為當有重複資料
    let sum = 0;
    let needToCalculateNumber = n;

    while (!sumsSet.has(1)) {
        sum = getPowSum(needToCalculateNumber);

        if (sumsSet.has(sum)) {
            return false;
        } else {
            sumsSet.add(sum);
        }

        needToCalculateNumber = sum;
    }

    return true;
};

/**
 * @param {number} number 
 * @returns {number}
 */
function getPowSum(number) {
    let digits = getDigits(number.toString());
    let sum = 0;
    digits.forEach(function (digit) {
        sum += Math.pow(digit, 2);
    }
    );
    return sum;
}

/**
 * @param {string} number
 * @return {Array}
 */
function getDigits(number) {
    let digits = [];

    for (let i = 0; i < number.length; i++) {
        digits.push(number[i]);
    }
    return digits;
}
/**
 * 測試
 */
console.log(isHappy(19));
console.log(isHappy(2));
console.log(isHappy(0));