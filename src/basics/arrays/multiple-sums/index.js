/**
 * @param {Array<Array<Number>>} lists
 * @returns {Array<Number>} The list of sums
 * sums([1, 2, 3], [5, -1], [], [0, 4]) //=> [6, 4, 0, 4]
 * Try to re-use the `sum` function implemented before.
 * Bonus: try to implement this without a `for` or `while` loop
 */
function sums(numbers) {
    var resulat = [];
    for (let i = 0; i < numbers.length; i++) {
        var sum = numbers[i].reduce(function (a,b) {
            return a+b ;
        },0);
        resulat.push(sum);
    }
    return resulat
}

module.exports = sums;
