const arr = [1,3,2,6,1,2];
const k = 3;

// const pairsDivisibleByK = (arr,k) => {
//     const sorted = arr.sort((a,b) => a - b);
//     let left = 0;
//     let right = sorted.length - 1;
//     let count = 0;

//     while (left < right) {
//         const sum = sorted[left] + sorted[right];

//         if (sum % k === 0) {
//             count++;
//             left++;
//             right--;
//         } else if (sum < k) {
//             left++;
//         } else {
//             right--;
//         }
//     }
//     return count;
// }
// console.log(pairsDivisibleByK(arr, k));

//brute force😤😤😤😤
const pairsDivisibleByK = (arr, k) => {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if ((arr[i] + arr[j]) % k === 0) {
                count++;
            }
        }
    }
    return count;
}
console.log(pairsDivisibleByK(arr,k));













