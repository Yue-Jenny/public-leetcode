/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {

    if (!digits) {
        return [];
    }

    let output = [];
    return letterCombi(digits, '', output);
};

function letterCombi(digits, str, output) {
    // 如果向下找沒有資料了，就存進陣列
    if (digits === '') {
        output.push(str);
    }
    else {
        // 找出第一個的數字2
        // 找出2對應的字典array ["a", "b", "c"]
        // 計算出array的長度
        for (var i = 0; i < numberMap[digits[0]].length; i++) {
            // 扣掉2之後的字串3與a遞迴, 3 & b, 3 & c
            letterCombi(digits.substr(1), str + numberMap[digits[0]][i], output);
        }
    }

    return output;
}

const numberMap = {
    '2': ['a', 'b', 'c'],
    '3': ['d', 'e', 'f'],
    '4': ['g', 'h', 'i'],
    '5': ['j', 'k', 'l'],
    '6': ['m', 'n', 'o'],
    '7': ['p', 'q', 'r', 's'],
    '8': ['t', 'u', 'v'],
    '9': ['w', 'x', 'y', 'z'],
}

/**
 * 測試
 */
console.log(letterCombinations());
console.log(letterCombinations("23"));