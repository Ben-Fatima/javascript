/**
 * @param {Array<Number>} numbers
 * @returns {Array<Number>} The list of positive numbers from numbers
 * onlyPositivve([1, -5, 3, 5, -1, 0, 4]) //=> [1, 3, 5, 0, 4]
 * Bonus: try to implement this without a `for` or `while` loop
 */
function onlyPositivve(numbers) {
    var result = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] >= 0) {
            result.push(numbers[i] )
        }
    }
    return result
}
module.exports = onlyPositivve;
