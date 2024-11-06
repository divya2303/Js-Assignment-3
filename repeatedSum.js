function singleDigitSum(number) {
    while (number >= 10) {
        number = number.toString().split('').reduce((acc, digit) => acc + +digit, 0);
    }
    return number;
}

console.log(singleDigitSum(456)); 
