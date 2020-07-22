/**
 * @param {Array<Number>} listA
 * @param {Array<Number>} listB
 * @returns {Array<Number>} The intersection of the two lists
 * Bonus: try to implement this without a `for` or `while` loop
 */
function intersection(listA, listB) {
    arrayNumb = [];
    listA.filter(function (item) {
        if (listB.includes(item)) {
            arrayNumb.push(item);
        }
    });
    return arrayNumb ;
}

module.exports = intersection;
