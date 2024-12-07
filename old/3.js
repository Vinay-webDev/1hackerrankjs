const array = [
                [1,2,3],
                [4,5,6],
                [9,8,9]
            ];
const array2 = [
                [11,2,4],
                [4,5,6],
                [10,8,-12]
            ];
function diagonalDifference (arr) {
    let lToRSum = 0;
    let rToLSum = 0;
    let j = arr.length - 1;
    for ( let i = 0; i < arr.length; i++ ) {
        lToRSum += arr[i][i] //for left to right diagonal 00 11 pattern
        rToLSum += arr[i][j--] //for right to left diagonal 01 10 pattern
    }
    return Math.abs(lToRSum - rToLSum);
}
console.log(diagonalDifference(array));   //2
console.log(diagonalDifference(array2));  //15


