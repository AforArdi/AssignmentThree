function analyzeText(str) {
    // Your code here
    if (typeof str !== 'string' || str === '') {
        return 'Invalid';
    }
    let wordArr = str.split(' ');
    let longwords = wordArr[0];
    let token = 0;

    for (let i = 1; i < wordArr.length; i++) {
        if (wordArr[i].length > longwords.length) {
            longwords = wordArr[i];
        }
    }
    for (let letter of str) {
        if (letter !== ' ') {
            token++;
        }
    }

    return {
        longwords,
        token
    }
}