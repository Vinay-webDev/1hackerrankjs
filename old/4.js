// const array = [1, 1, 0, -1, -1];
// const array2 = [-4, 3, -9, 0, 4, 1];
// function plusMinus(arr) {
//     let positive = [];
//     let negative = [];
//     let zero = [];
//     let positiveRatio = 0;
//     let negativeRatio = 0;
//     let zeroRatio = 0;
//     for ( let i = 0; i < arr.length; i++ ) {
//         if ( Math.sign(arr[i]) === 1) {
//             positive.push(arr[i]);
//         } else if ( Math.sign(arr[i]) === -1 ) {
//             negative.push(arr[i]);
//         } else if ( Math.sign(arr[i]) === 0 ) {
//             zero.push(arr[i]);
//         }
//     }
//     positiveRatio = (positive.length / arr.length).toPrecision(6);
//     negativeRatio = (negative.length / arr.length).toPrecision(6);
//     zeroRatio = (zero.length / arr.length).toPrecision(6);
//     console.log(positiveRatio);
//     console.log(negativeRatio);
//     console.log(zeroRatio);
// }
// plusMinus(array);  //0.400000 0.400000 0.200000 
// plusMinus(array2); //0.500000 0.333333 0.166667

const array = [1, 1, 0, -1, -1];
const array2 = [-4, 3, -9, 0, 4, 1];
function plusMinus(arr) {
    let positive = [];
    let negative = [];
    let zero = [];
    for ( let i = 0; i < arr.length; i++ ) {
        switch (Math.sign(arr[i])) {
            case 1:
                positive.push(arr[i]);
                break;
            case -1:
                negative.push(arr[i]);
                break;
            case 0:
                zero.push(arr[i]);
                break;
            default:
                break;
        }
    }
    console.log((positive.length / arr.length).toPrecision(6));
    console.log((negative.length / arr.length).toPrecision(6));
    console.log((zero.length / arr.length).toPrecision(6));
}
plusMinus(array);  //0.400000 0.400000 0.200000 
plusMinus(array2); //0.500000 0.333333 0.166667



