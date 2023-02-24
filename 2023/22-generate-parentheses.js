/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = (n) => {
    const res = [];

    const go = (l, r, s) => {
        if (s.length === 2 * n) {
            res.push(s);
            return;
        }

        if (l < n) go(l + 1, r, s + '(');//選擇一 : 左 [ 數量小於 n, 可以加一個 [
        if (r < l) go(l, r + 1, s + ')');//選擇二 : 右 ] 數量小於左 [, 可以加一個 ]
    };

    go(0, 0, '');
    return res;
};

/**
 * 測試
 * */
console.log(generateParenthesis(3));