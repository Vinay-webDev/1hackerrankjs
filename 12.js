//Migratary Birds
// const array = [1, 1, 2, 2, 3];
// const migratoryBirds = (arr) => {
//     let count = 1;
//     let map = new Map();
//     for(let i = 1; i < arr.length; i++) {
//         if (arr[i - 1] !== arr[i]) {
//             map.set(arr[i - 1], count);
//             count = 0;
//         } 
//         count++;
//     }
//     //for handling the last segment
//     map.set(arr[arr.length - 1], count);
//     for (const [key, count] of map) {
        
//     }
//     return map;
// }
// console.log(migratoryBirds(array));

// const array = [1, 1, 2, 2, 3];
const migratoryBirdsMyTry = (arr) => {
    let id = 0;
    let previous_max = 0;
    let current_max = 1;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i - 1] == arr[i]) {
            current_max++;
        } else {
            if (current_max === previous_max) {
                id = arr[i - 1] < arr[i] ? arr[i - 1] : arr[i];
            } else {
                id = arr[i];
            }
            previous_max = current_max;
            current_max = 1;
        }
    }
    return id;
}
// console.log(migratoryBirds(array)); // ok I lost😞

//correct implementation
// const array = [1, 1, 2, 2, 3];
// const array2 = [1,2,3,3,3,3,4,1,3,3,9,9,3,0,0,10,123,0,12,1,9,123,10,4,4,3,9,2,2,10,100];
// const migratoryBirds = (arr) => {
//     let id = arr[0]; // Initialize id to the first element
//     let previous_max = 0;
//     let current_max = 1;

//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i - 1] === arr[i]) {
//             current_max++; // Increment the count for the current group
//         } else {
//             // Check if the current group has the highest count
//             if (current_max > previous_max || 
//                 (current_max === previous_max && arr[i - 1] < id)) {
//                 id = arr[i - 1]; // Update the id to the element with higher or equal count
//                 previous_max = current_max; // Update the previous_max
//             }
//             current_max = 1; // Reset current_max for the next group
//         }
//     }

//     // Handle the last group in the array
//     if (current_max > previous_max || 
//         (current_max === previous_max && arr[arr.length - 1] < id)) {
//         id = arr[arr.length - 1];
//     }

//     return id;
// };
// console.log(migratoryBirds(array)); // Output: 1
//ok this won't work either😞😞


// const array = [1, 1, 2, 2, 3];
// const array2 = [1,2,3,3,3,3,4,1,3,3,9,9,3,0,0,10,123,0,12,1,9,123,10,4,4,3,9,2,2,10,100];
const migratoryBirdsGPT = (arr) => {
    const freqMap = new Map();

    // Count occurrences
    for (const num of arr) {
        freqMap.set(num, (freqMap.get(num) || 0) + 1);
    }

    // Find the ID with the highest frequency and resolve ties
    let id = null;
    let maxCount = 0;

    for (const [key, count] of freqMap) {
        if (count > maxCount || (count === maxCount && key < id)) {
            id = key;
            maxCount = count;
        }
    }

    return id;
};
// console.log(migratoryBirdsGPT(array)); // Output: 1
// console.log(migratoryBirdsGPT(array2)); // Output: 1



const array = [1, 1, 2, 2, 3];
const array2 = [1,2,3,3,3,3,4,1,3,3,9,9,
                3,0,0,10,123,0,12,1,9,
                123,10,4,4,3,9,2,2,10,100];
const migratoryBirds = (arr) => {
    arr.sort((a, b) => a - b);
    let count = 1;
    let map = new Map();
    for(let i = 1; i < arr.length; i++) {
        if (arr[i - 1] !== arr[i]) {
            map.set(arr[i - 1], count);
            count = 0;
        } 
        count++;
    }
    //for handling the last segment
    map.set(arr[arr.length - 1], count);
    let maxCount = 0;
    let id = null;
    for (const [key, count] of map) {
        if (count > maxCount || (count === maxCount && key < id)) {
            id = key;
            maxCount = count;
        }
    }
    return id;
}
console.log(migratoryBirds(array));  //1
console.log(migratoryBirds(array2)); //3

//I found this from discussion👇⭐
function migratoryBirds(arr) {
    // Write your code here
    let frequencyOfEachDistinctNumber = new Map();
    let keysWithMaxValue = [];
    for (let i = 1; i < arr.length; i++) {
        if (frequencyOfEachDistinctNumber.has(arr[i])) {
            let temp = frequencyOfEachDistinctNumber.get(arr[i]);
            frequencyOfEachDistinctNumber.set(arr[i], temp + 1);
        }
        else {
            frequencyOfEachDistinctNumber.set(arr[i], 1);
        }
    }
    let max = Math.max(...frequencyOfEachDistinctNumber.values());
    
    for (let [key, value] of frequencyOfEachDistinctNumber.entries()) {
        if (value === max)
            keysWithMaxValue.push(key);
    }
    return Math.min(...keysWithMaxValue);
}

//lol how is this even possible😭⭐
function migratoryBirds(arr) {
    // Write your code here
//    let hashmap ={};

const birdCount = Array(6).fill(0);
   for (let bird of arr){
       birdCount[bird]++
   }
   const max = birdCount.indexOf(Math.max(...birdCount))
  
return max;
}

//another one😭⭐
function migratoryBirds(arr) {
    const type = {};
    let maxKey = 0;
    let maxValue = 0;
    
    for(let i = 1; i<=5; i++){
        type[i]= 0;
    }
    
    for (let i = 0; i < arr.length; i++) {
        const current = arr[i];
        if (current in type) {
            const newValue = ++type[current];
            if (newValue > maxValue || (newValue === maxValue && current < maxKey)) {
                maxKey = current;
                maxValue = newValue;
            }
        }
    }
    return maxKey;
}


