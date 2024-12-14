//Utopian Tree
const {n, n2, n3, n4} = {n: 5, n2: 0, n3: 1, n4: 4};
//👇Period  Height👇
//  0          1
//  1          2
//  2          3
//  3          6
//  4          7
//  5          14
const utopianTree = (n) => {
    let growth = 1;
    for (let i = 1; i <= n; i++) {
        if (i % 2 === 0) {
            growth++;
        } else {
            growth = growth * 2;
        }
    }
    return growth;
}
console.log(utopianTree(n));    //14
console.log(utopianTree(n2));   //1
console.log(utopianTree(n3));   //2
console.log(utopianTree(n4));   //7



