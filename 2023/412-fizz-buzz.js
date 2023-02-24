/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzzBest = function (n) {
    /**
     * 判斷為 3 的倍數的方式：以 3 為初始值，每次加 3 後的值當作判斷依據，若有符合則再加 3
     * 判斷為 5 的倍數的方式：如同 3
     */

    let a = 3;
    let b = 5;
    let results = [];
    for (let i = 1; i <= n; i++) {
        if (i == a && i != b) {
            a += 3;
            results.push('Fizz');
        } else if (i == b && i != a) {
            b += 5;
            results.push('Buzz');
        } else if (i == a && i == b) {
            a += 3;
            b += 5;
            results.push('FizzBuzz');
        } else {
            results.push(i.toString());
        }
    }

    return results;
}

/**
 * 測試
 */
console.log(fizzBuzzBest(5));
console.log(fizzBuzzBest(15));

/**
 * @param {number} n
 * @returns {boolean} 
 */
const checkDiviseBy3 = (n) => {
    let result = n % 3 == 0 ? true : false;
    return result;
}

/**
 * @param {number} n 
 * @returns {boolean}
 */
const checkDiviseBy5 = (n) => {
    /**
     * 數字結尾是 0 or 5 表示為 5 的倍數
     */
    let lastElement = n.toString().split('').pop();
    let isDividedBy5 = false;
    if (lastElement == '5' || lastElement == '0') {
        isDividedBy5 = true;
    }
    return isDividedBy5;
}

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzzMy = function (n) {
    /**
     * 判斷 3 的倍數：n % 3 結果為 0
     * 判斷 5 的倍數：數字結尾是 0 or 5 表示為 5 的倍數
     */
    let results = [];
    for (let i = 1; i <= n; i++) {
        let word = '';
        let isDividedBy3 = checkDiviseBy3(i);
        let isDividedBy5 = checkDiviseBy5(i);
        if (isDividedBy3 && isDividedBy5) {
            word = 'FizzBuzz';
        } else if (isDividedBy3 && !isDividedBy5) {
            word = 'Fizz';
        } else if (isDividedBy5 && !isDividedBy3) {
            word = 'Buzz';
        } else {
            word = i.toString();
        }
        results.push(word);
    }
    return results;
};

/**
 * 測試
 */
console.log(fizzBuzzMy(3));
console.log(fizzBuzzMy(5));
console.log(fizzBuzzMy(15));