/**
 * @param {Array<Number>} numbers
 * @returns {Number} The sum of numbers
 * Bonus: try to implement this without a `for` or `while` loop
 */
function sum(numbers) {
    var sum = numbers.reduce(function (a,b) {
        return a+b ;
    },0);
    return sum
}

module.exports = sum;
