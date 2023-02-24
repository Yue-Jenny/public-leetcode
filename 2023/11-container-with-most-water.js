/**
 * @param {number[]} height
 * @return {number}
 */
var maxAreaMy = function (height) {

    let startIdx = 0;
    let endIdx = height.length - 1;

    let max = 0;

    // slide windows
    while (true) {
        let area = (endIdx - startIdx) * Math.min(height[startIdx], height[endIdx]);

        if (area > max) {
            max = area;
        }

        startIdx++;
        endIdx--;

        if (startIdx === endIdx) {
            return max;
            break;
        }
    }

};

const maxArea = (height) => {
    let result = 0,
        left = 0,
        right = height.length - 1;

    while (left < right) {
        let smallestSide = Math.min(height[left], height[right]);
        let area = (right - left) * smallestSide;

        if (area > result) result = area;

        if (height[left] < height[right]) left++;//
        else right--;
    }

    return result;
};

/**
 * 測試
 */
let height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let result = maxArea(height);
console.log(result);
