/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
    /**
     * 遍歷所有 s 內的字母，若都有依序能在 t 找到，回傳 true
     * 若 s 還在遍歷，而 t 已遍歷完畢，表示有些字母在 t 沒有辦法找到，回傳 false
     * 若 s 的字母能在 t 內找到，則記錄一筆 true 到 results array 中
     * 要注意: 因為需要依照順序找到，所以在 t 尋找的 start index 要調整，每次找到一個，start index 就要是被找到元素的 index + 1 
     */
    let chars = s.split('');
    let tStartIdx = 0;
    let results = [];
    for (let i = 0; i < s.length; i++) {
        for (let j = tStartIdx; j < t.length; j++) {
            if (s[i] === t[j]) {
                results.push(true);
                tStartIdx = j + 1;
                break;
            }
        }
    }
    let result = results.length == chars.length ? true : false;
    return result;
};

/**
 * 測試
 */
console.log(isSubsequence("abc", "ahbgdc"));//true
console.log(isSubsequence("acb", "ahbgdc"));//false
console.log(isSubsequence("aaaaaa", "bbaaaa"));//false