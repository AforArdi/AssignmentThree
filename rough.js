let number = 17.17;

function findType(num) {
    if (typeof num === 'number') {
        return true;
    }
}
console.log(findType(number));