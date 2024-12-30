
const arr1 = [10, 20, 20, 10, 10, 30, 50, 10, 20];
const arr2 = [1, 2, 1, 2, 1, 3, 2];
const sockMerchant = (arr) => {
    let pair = 0;
    const counts = arr.reduce((acc, value) => {
        acc[value] = (acc[value] || 0) + 1;
        return acc;
    }, {});
    Object.values(counts).forEach(value => {
        pair += Math.floor(value / 2);
    });
    return pair;
}
console.log(sockMerchant(arr1));    //3
console.log(sockMerchant(arr2));    //2










