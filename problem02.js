function validOtp(otp) {
    // Your code here
    if (typeof otp !== 'string'){
        return 'Invalid';
    }
    if (otp.length !== 8 || !otp.startsWith('ph-')){
        return false;
    }
    else{
        return true;
    }
}

let otp = "ph-1234";
let output = validOtp(otp);
console.log(output);