//picking numbers

//the absoulte difference between two elements is <= 1;
const pickingNumbersMyTry = (arr) => {
    let currentMax = 1;
    let subList = [];
    for (let i = 1; i < arr.length; i++) {
        const absDiff = Math.abs(arr[i] - arr[i - 1]);
        if (absDiff <= 1) {
            currentMax++;
        } else {
            subList.push(currentMax);
            currentMax = 1;
        }
    }
    // console.log(subList);
    return Math.max(...subList);
}
// console.log(pickingNumbersMyTry(a));     //5
// console.log(pickingNumbersMyTry(a2));    //3
// console.log(pickingNumbersMyTry(a3));    //5

const a = [1,1,2,2,4,4,5,5,5];
const a2 = [4, 6, 5, 3, 3, 1];
const a3 = [1, 2, 2, 3, 1, 2];
const a4 = [4, 2, 3, 4, 4, 9, 98, 98, 3, 3, 3, 4, 2,
             98, 1, 98, 98, 1, 1, 4, 98, 2, 98, 3, 9,
             9, 3, 1, 4, 1, 98, 9, 9, 2, 9, 4, 2, 2, 9, 
             98, 4, 98, 1, 3, 4, 9, 1, 98, 98, 4, 2, 3, 
             98, 98, 1, 99, 9, 98, 98, 3, 98, 98, 4, 98, 
             2, 98, 4, 2, 1, 1, 9, 2, 4
            ];
const pickingNumbers = (arr) => {
    let maxCount = 0;
    for (let i = 0; i < arr.length; i++) {
        let count = 0;
        for (let j = i + 1; j < arr.length; j++) { 
            if (Math.abs(arr[i] - arr[j]) <= 1) {
                count++;
            }
        }
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
}
console.log(pickingNumbers(a));     //4 wrong
console.log(pickingNumbers(a2));    //3 wrong
console.log(pickingNumbers(a3));    //4 wrong
console.log(pickingNumbers(a4));    //29 wrong




