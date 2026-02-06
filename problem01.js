function newPrice(currentPrice, discount) {
    // Your code here
    if (typeof currentPrice !== 'number' || typeof discount !== 'number'){
        return "Invalid";
    }
    if (discount < 0 || discount > 100){
        return 'Invalid';
    }
    let discountAmount = (currentPrice * (discount)) / 100;
    let afterDiscount = currentPrice - discountAmount;
    return afterDiscount.toFixed(3);
}

let output = newPrice(2000, 17.17);
console.log(output);