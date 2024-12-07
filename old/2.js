const a = [5, 6, 7];
const b = [3, 6, 10];
const a2 = [17, 28, 30];
const b2 = [99, 16, 8];
function compareTriplets(a, b) {
    let alice = 0;
    let bob = 0;    
    for (let i = 0; i < a.length; i++ ) {
        if (a[i] > b[i]) {
            alice += 1;
        } else if (a[i] < b[i]) {
            bob += 1;
        } else {
            alice += 0;
            bob += 0;
        }
    }
    return [alice, bob];
}
console.log(compareTriplets(a, b));    //[1, 1]
console.log(compareTriplets(a2, b2));  //[2, 1]



