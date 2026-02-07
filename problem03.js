function finalScore(omr) {
    //write your code here
    if(typeof omr !== 'object' || Array.isArray(omr)){
        return 'Invalid';
    }

    let sum = 0;
    let right = 0;
    let wrong = 0;

    for (let key in omr){
        sum += omr[key];
        if(key === 'right'){
            right += omr[key] * 1;
        }
        if(key === 'wrong'){
            wrong += omr[key] * 0.5;
        }
    }
    if (sum > 100){
        return 'Invalid';
    }
    let total = right - wrong;
    return Math.round(total);
}

const myBcsScore = {
    'right': 50,
    'wrong': 20,
    'skip': 30
}
console.log(finalScore(myBcsScore));
