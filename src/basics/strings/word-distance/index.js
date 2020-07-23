/**
 * @param {String} wordA
 * @param {String} wordB
 * @returns {Number} number of characters that are different between `wordA` and `wordB`
 * Note: `wordA` and `wordB` have the same length.
 * distance('a', 'a') //=> 0
 * distance('abc', 'adc') //=> 1
 * distance('abc', 'cde') //=> 3
 */
function distance(wordA,wordB) {
    var counter = 0 ;
    var len = wordA.length ;
    for (let i = 0; i < len ; i++) {
        for (let j = i; j < len; j++) {
            if (wordA[i]==wordB[j]) {
                break ;
            }else{
                counter += 1 ;
                break;
            }
            
        }
        
    }return counter 
}

module.exports = distance;
