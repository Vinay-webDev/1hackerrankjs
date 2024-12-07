const array = [1,2,3,4,5];
const array2 = [100, 1000, 10000, 100000, 1000000];

function simpleArraySum(ar) {
    let x = 0;
    for (let i = 0; i < ar.length; i++) {
        x += ar[i];
    }
    return x;
}
console.log(simpleArraySum(array));  //15
console.log(simpleArraySum(array2)); //1111100



