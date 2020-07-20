/**
 * @param {String} word
 * @returns {Boolean} `true` if `word` is a palindrom, `false` otherwise.
 * isPalindrom('a') //=> true
 * isPalindrom('abcba') //=> true
 * isPalindrom('abcdba') //=> false
 */
function isPalindrom(word) {
    var reversed = word.split("").reverse().join("");
    if (word == reversed) {
        return true
    }
    return false
}


module.exports = isPalindrom;
