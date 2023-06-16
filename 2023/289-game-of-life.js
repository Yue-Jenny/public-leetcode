/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */

let die = 2;
let live = 3;

var gameOfLife = function (board) {

    let rowslength = board.length;
    let colsLength = board[0].length;

    for (let r = 0; r < rowslength; r++) {
        for (let c = 0; c < colsLength; c++) {

            // 開始計算每一個 cell 未來是活細胞還是死細胞
            let aroundLives = countAroundLives(board, r, c);

            /**
                1. 如果一個活細胞周圍的活細胞少於兩個，則該細胞會因為人口不足而死亡。
                2. 如果一個活細胞周圍有兩個或三個活細胞，則該細胞在下一代中繼續存活。
                3. 如果一個活細胞周圍的活細胞超過三個，則該細胞會因為人口過剩而死亡。
                4. 如果一個死細胞周圍正好有三個活細胞，則該細胞會因為繁殖而成為活細胞。
            */
            if (board[r][c] == 1 && (aroundLives < 2 || aroundLives > 3)) {
                board[r][c] = die;
            } else if (board[r][c] == 1 && (aroundLives == 2 || aroundLives == 3)) {
                // console.log("Nothing to do.");
            } else if (board[r][c] == 0 && aroundLives == 3) {
                board[r][c] = live;
            }

        }

    }


    // 再來將 die / live 各轉為 0 / 1
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[0].length; y++) {
            if (board[x][y] == die) {
                board[x][y] = 0;
            } else if (board[x][y] == live) {
                board[x][y] = 1;
            }
        }
    }

};

let countAroundLives = function (board, r, c) {
    // 假設 board[r][c] 為中心點，設定為 (0, 0)，周圍會有以下的位置：
    let aroundLocations = [[1, 0], [1, 1], [0, 1], [-1, 1], [-1, 0], [-1, -1], [0, -1], [1, - 1]];

    let count = 0;

    for (let i = 0; i < aroundLocations.length; i++) {
        let location = aroundLocations[i];
        let x = location[0];
        let y = location[1];

        // 超過邊界範圍，因為 2D array 的位置不可能為負數
        if ((x + r) < 0 || (c + y) < 0) {
            continue;
        } else if ((x + r) >= board.length || (c + y) >= board[0].length) {
            continue;
        } else if (board[x + r][c + y] == 1 || board[x + r][c + y] == die) {
            count++;
        }

    }

    return count;
}

/** 
 *    board:
 *      3
 *    /   \
 *    0 1 0 \   
 *    0 0 1   
 *    1 1 1   4   
 *    0 0 0 /
 * 
 *    expect result:
 *    0 0 0                  
 *    1 0 1                  
 *    0 1 1                  
 *    0 1 0                  
 */
let board = [[0, 1, 0], [0, 0, 1], [1, 1, 1], [0, 0, 0]];
let gameOfLifeResult = gameOfLife(board);
console.log(gameOfLifeResult);

