/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitBest = function (prices) {

    /**
     * 建立兩個指標，指標先分別指第 0 與第 1 的元素上，比較兩者的差值
     * 若為正表示買低賣高(先將此 profit 記錄下來)，將第二個指標往後一個元素，確認差值，若為負表示有更低點可以買進，
     * 於是移動第一個指標到此元素上，第二個指標指向後一個元素上
     * 並繼續上述比較差值流程
     */

    let firstIdx = 0;
    let secondIdx = 1;
    let diff = 0;
    let profit = 0;
    while (secondIdx < prices.length) {
        diff = prices[secondIdx] - prices[firstIdx];
        if (diff > 0) {
            profit = Math.max(diff, profit);
            secondIdx++;
        } else {
            firstIdx++;
            secondIdx = firstIdx + 1;
        }
    }
    return profit;
}



/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfitMySolution = function (prices) {

    /**
     * 依照以下邏輯遍歷
     * a = 0; b = 0 ~ last_index
     * a = 1; b = 1 ~ last_index
     * a = 2; b = 2 ~ last_index
     */

    // 設定價差初始為 0，若之後有計算出比 profit 大的價差，再將該價差取代為 profit
    let profit = 0;
    let length = prices.length;
    let diff = 0;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            if (prices[j] > prices[i]) {
                diff = prices[j] - prices[i];

                // 建議使用 Math.max 判斷大小
                profit = Math.max(diff, profit);

                // 原判斷大小寫法
                // if (diff > 0 && diff > profit) { 
                //     profit = diff;
                // }
            }
        }
    }

    return profit;
}

/**
 * 測試
 */
console.log(maxProfitBest([7, 1, 5, 3, 6, 4]));
console.log(maxProfitBest([7, 6, 4, 3, 1]));
console.log(maxProfitMySolution([7, 1, 5, 3, 6, 4]));
console.log(maxProfitMySolution([7, 6, 4, 3, 1]));