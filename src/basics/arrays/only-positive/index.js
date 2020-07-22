/**
 * @param {Array<Number>} numbers
 * @returns {Array<Number>} The list of positive numbers from numbers
 * onlyPositivve([1, -5, 3, 5, -1, 0, 4]) //=> [1, 3, 5, 0, 4]
 * Bonus: try to implement this without a `for` or `while` loop
 */
function onlyPositivve(numbers) {
    var result = [];
    return numbers.filter( value => value >= 0)
  }
module.exports = onlyPositivve;
