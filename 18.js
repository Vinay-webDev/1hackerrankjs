const a = [3, 4, 5];
const k = 2;
const queries = [1,2];
const a2 = [1, 2, 3];
const k2 = 2;
const queries2 = [0, 1, 2];
const circularRotationOne = (a, k, queries) => {
    let answers = [];
    let rotations = k;
    while(rotations > 0) {
        let subArr = a.slice(0, a.length - 1);
        a = [a[a.length - 1], ...subArr];
        rotations--;
    }
    for (let i = 0; i < queries.length; i++) {
        answers.push(a[queries[i]]);
    }
    return answers;
}
console.log(circularRotation(a, k, queries));    //[5, 3]
console.log(circularRotation(a2, k2, queries2)); //[2, 3, 1]
//❌❌❌❌Time limit exceeded❌❌❌❌
// so this was wrong way of doing it's not efficient we don't have to rotate manually every time when there is huge number of rotations

const circularRotation= (a, k, queries) => {
    const n = a.length;
    const effectiveRotations = k % n; 
    return queries.map(queryIndex => {
        const rotatedIndex = (queryIndex - effectiveRotations + n) % n;
        return a[rotatedIndex];
    });
};

console.log(circularRotation(a, k, queries));    // Output: [5, 3]
console.log(circularRotation(a2, k2, queries2)); // Output: [2, 3, 1]


