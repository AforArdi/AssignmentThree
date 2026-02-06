function gonoVote(array) {
    //write your code here
    if (!Array.isArray(array)){
        return 'Invalid'
    }
    let haCount = 0;
    let naCount = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 'ha') {
            haCount++;
        }
        if (array[i] === 'na') {
            naCount++;
        }
    }
    if (haCount > naCount) {
        return true;
    }
    if (haCount < naCount) {
        return false;
    }
    else {
        return 'equal';
    }
}