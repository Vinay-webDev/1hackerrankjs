//FIND DIGITS
const n = 124;
const n2 = 1012;
const n3 = 20242024;
const findDigits = (n) => {
    let digits = n.toString().split("");
    let count = 0;
    for (let i = 0; i < digits.length; i++) {
        if (n % digits[i] === 0) {
            count++;
        }
    }
    return count;
}
console.log(findDigits(n));  //3
console.log(findDigits(n2)); //3
console.log(findDigits(n3)); //6