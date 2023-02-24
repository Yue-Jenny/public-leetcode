/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBitsOperateBitsMy = function (n) {
    /**
     * 如果最右邊的 bit 是 1，取出放在 result 內，result 增加 0，反之則增加 1
     * 如何計算最右邊的 bit 數字跟 1 做 ＆ 比較，如果結果是 1，則最右邊 bit 為 1
     */
    let result = 0;
    for (let i = 0; i < 32; i++) {
        result <<= 1; // 右邊補一個 0
        let compare = n & 1;
        if (compare == 1) { // 比較結果是 1, 表示最右邊的 bit 是 1, result 加一，剛才補的 0 會變成 1, 若結果是 0, 則維持 0
            result++;
        }
        n = n >>= 1; // 去除 n 的最右邊一個 bit
    }
    return result >>> 0;
    // Our input is an unsigned integer but the left shift bitwise operator returns a signed 32-bit integer.
    // We can convert the signed integer back to unsigned by using the "unsigned right shift" operator. result >>> 0 won't shift any of our existing bits but will set the sign bit as 0
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift
}
/**
 * 測試
 */
// console.log(reverseBitsOperateBitsMy(0b00000010100101000001111010011100));
// console.log(reverseBitsOperateBitsMy(0b11111111111111111111111111111101));

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBitsOperateBits = function (n) {

    /**
     * 如果最右邊的 bit 是 1，則右邊增加 0，反之則增加 1
     * 如何計算最右邊的 bit 數字 ? 跟 1 做 ＆ 比較，如果結果是 1，則最右邊 bit 為 1
     */

    let result = 0;
    for (let i = 0; i < 32; i++) {
        result <<= 1;
        result |= n & 1;
        n >>= 1;
    }
    return result >>> 0;//剔除最右邊的 bit, 擠掉最右邊的一個 bit, 最左邊補上一個 bit, 補上的 bit 值為 0
}
/**
 * 測試
 */
// console.log(reverseBitsOperateBits(0b00000010100101000001111010011100));
// console.log(reverseBitsOperateBits(0b11111111111111111111111111111101));

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
    let arrOfN = n.toString(2).padStart(32, "0").split("").reverse();
    let result = parseInt(arrOfN.join(""), 2);
    return result;
}
/**
 * 測試
 */
//console.log(reverseBits(0b00000010100101000001111010011100));
//console.log(reverseBits(0b11111111111111111111111111111101));

/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBitsMy = function (n) {
    /**
     * 將 number 以 string 存下來
     * 接著判斷是否少於 32 個(題目限制)，少於就補 0
     * 補0後的字串，換成陣列，並且翻轉陣列
     * 將翻轉陣列存為 string，接著再轉換成整數
     */

    let number = n.toString(2);
    if (n.toString(2).length < 32) {
        let count = 32 - n.toString(2).length;
        number = addZero(n.toString(2), count);
    }
    let bits = number.split('');
    let reversedBits = countDown(bits).join('');
    let reversedBitsResult = parseInt(reversedBits, 2);
    return reversedBitsResult;
};

/**
 * 
 * @param {string} number 
 * @param {number} count
 * @returns {string}
 */
let addZero = function (number, count) {

    let zeros = '';
    for (let j = 0; j < count; j++) {
        zeros += '0';
    }
    return zeros + number;
}

/**
 * @param {number[]} numbers
 * @returns {number[]} 
 */
let countDown = function (numbers) {
    let newNumbers = [];
    for (let i = numbers.length - 1; i >= 0; i--) {
        newNumbers.push(numbers[i]);
    }
    return newNumbers;
}
/**
 * 測試
 */
//console.log(reverseBitsMy(0b00000010100101000001111010011100));
//console.log(reverseBitsMy(0b11111111111111111111111111111101));