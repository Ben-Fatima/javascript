const getFactors = require("../factors");

/**
 * @param {Number} n > 0
 * @returns {Array<Number>} the list of all divisors of `n`.
 */
function getDivisors(n) {
  divisorsArray = [];
  for (let i = 0; i <= n ; i++) {
    if (n % i == 0) {
      divisorsArray.push(i);
    }
    
  }
  return divisorsArray;
}

module.exports = getDivisors;
