function finalScore(omr) {
    //write your code here

    for (let key in omr){
        let sum = 0;
        let objValues = parseInt(Object.values(omr));
        let right = 0;
        let wrong = 0;
        let total = right - wrong;
        sum += value;
    }
    
    if (sum !== 100){
        return 'Invalid';
    }
    return Math.round(total);
}


const myBcsScore = {
    right: 50,
    wrong: 20,
    skip: 30
}