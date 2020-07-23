/**
 * @param {Array<Number>} numbers
 * @returns {{min: Number, max: Number, average: Number}} The min, max and average of numbers
 * stats([1, 2, -2, 3]) //=> {min: -2, max: 3, average: 1}
 * Bonus: try to implement this without a `for` or `while` loop
 */
function stats(numbers) {
    numbers.sort();
    var min = numbers[0];
    var max = numbers[numbers.length-1];
    var sum = numbers.reduce(function (a,b) {
        return a+b ;
    },0);
    var average = sum/numbers.length ;
    return {'min' : min , 'max' : max , 'average': average} 

}

module.exports = stats;
