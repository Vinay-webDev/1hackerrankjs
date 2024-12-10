/*

There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

👉The elements of the first array are all factors of the integer being considered
👉The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. Determine how many such numbers exist.
*/



const a = [2, 4];
const b = [16, 32, 96];

const getTotalX = (a, b) => {
    let left = a[a.length - 1];
    let right = b[0];

    while (left < right) {
        mid = Math.floor((left + right) / 2);

        
    }
}