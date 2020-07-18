/**
 * @param {Number} n
 * @returns {Array<Number>} the list of factors of `n`.
 */
function getFactors(n) {
  factors = [];
  if( n == 0 || n ==1){
    return [n];
  }
  for (let i = 2; i <= n; i++) {
    while (n%i == 0) {
      factors.push(i);
      n = n/i ;
    }
    
  }
  return factors ;
  }
    

module.exports = getFactors;
