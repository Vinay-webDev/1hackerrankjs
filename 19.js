//magic square
const s = [[5, 3, 4], [1, 5, 8], [6, 4, 2]];
const s2 = [[4, 9, 2],[3, 5, 7,],[8, 1, 5]];
const s3 = [[4, 8, 2],[4, 5, 7],[6, 1, 6]];
const formingMagicSquare = (s) => {
    let flatArr = s.flat();
    const magicArr = [
        [8, 1, 6, 3, 5, 7, 4, 9, 2],
        [6, 1, 8, 7, 5, 3, 2, 9, 4],
        [4, 9, 2, 3, 5, 7, 8, 1, 6],
        [2, 9, 4, 7, 5, 3, 6, 1, 8],
        [8, 3, 4, 1, 5, 9, 6, 7, 2],
        [4, 3, 8, 9, 5, 1, 2, 7, 6],
        [6, 7, 2, 1, 5, 9, 8, 3, 4],
        [2, 7, 6, 9, 5, 1, 4, 3, 8]
    ]
    let minCost = Infinity;
    for (const magic of magicArr) {
        let cost = 0;
        for (let i = 0; i < 9; i++) {
            cost += Math.abs(flatArr[i] - magic[i]);
        }
        minCost = Math.min(minCost, cost);
    }
    return minCost;
}
console.log(formingMagicSquare(s));    //7
console.log(formingMagicSquare(s2));   //1
console.log(formingMagicSquare(s3));   //4




