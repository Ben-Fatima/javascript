/**
 * @param {Number} n
 * @returns {Boolean} `true` if `n` is a prime number, `false` otherwise.
 */
function isPrime(n) {
  if ( n == 1 || n == 0) {
    return false;
  }
  if ( n == 2) {
    return true ;
  }

  for  ( var i = 2 ; i < n ; i++ ) {
      if ( n % i == 0){
          return false ;
          break;
      }
  }
  return true ; 
}

module.exports = isPrime;
