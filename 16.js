//Electronic shop🪫🏪🛍️🛒
const b1 = 60;
const keyboards1 = [40, 50, 60];
const drives1 = [5, 8, 12];
const b2 = 10;
const keyboards2 = [3, 1];
const drives2 = [5, 2, 8];
const b3 = 5;
const keyboards3 = [4];
const drives3 = [5];
const getMoneySpent = (keyboards, drives, b) => {
    let maxList = [];
    for (let i = 0; i < keyboards.length; i++) {
        for (let j = 0; j < drives.length; j++) {
            const cost = keyboards[i] + drives[j];
            if (cost <= b) {
                maxList.push(cost); 
            }
        }
    }
    if (maxList.length) {
        return Math.max(...maxList);  
    } else {
        return -1;
    }
}
console.log(getMoneySpent(keyboards1, drives1, b1));    //58
console.log(getMoneySpent(keyboards2, drives2, b2));    //9
console.log(getMoneySpent(keyboards3, drives3, b3));    //-1




