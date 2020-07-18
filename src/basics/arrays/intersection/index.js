/**
 * @param {Array<Number>} listA
 * @param {Array<Number>} listB
 * @returns {Array<Number>} The intersection of the two lists
 * Bonus: try to implement this without a `for` or `while` loop
 */
function intersection(listA, listB) {
    arrayNumb = [];
    for (let i = 0; i < listA.length; i++) {
        for (let j = 0; j < listB.length; j++) {
            if (listA[i]==listB[j]) {
               arrayNumb.push(listA[i]) 
            }   
        }
        
    }
    return arrayNumb ;
}

module.exports = intersection;
