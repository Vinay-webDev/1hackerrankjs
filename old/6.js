const array = [1, 3, 5, 7, 9];
const array2 = [1, 2, 3, 4, 5];
function miniMaxSum(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let bodySum = 0;
    if ( max === min ) {
        bodySum += arr[0]*4;
        console.log(`${bodySum} ${bodySum}`)
    } else {
        for ( let i = 0; i < arr.length; i++ ) {
            if ( i === arr.indexOf(max) ) {
                bodySum += 0;
            } else if ( i === arr.indexOf(min) ) {
                bodySum += 0;
            } else {
                bodySum += arr[i];
            } 
        }
        console.log(`${min+bodySum} ${max+bodySum}`)
    }
}
miniMaxSum(array);  //16 24
miniMaxSum(array2); //10 14


