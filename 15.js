//angry professor😡

const k = 3;
const a = [-2, -1, 0, 1, 2];
const k2 = 3;
const a2 = [-1, -3, 4, 2];
const k3 = 2;
const a3 = [0, -1, 2, 1];
// arrivaTime = 0; arrivedOnTime =< 0; arrivedLate > 0;
const angryProfessor = (k, a) => {
    let arrivedLate = 0;
    let arrivedOnTime = 0;
    for (let i = 0; i < a.length; i++) {
        if (a[i] <= 0) {
            arrivedOnTime++;
        } else {
            arrivedLate++;
        }
    }
    if (arrivedOnTime >= k) {
        return "NO";
    } else {
        return "YES";
    }
}
console.log(angryProfessor(k, a));      //NO
console.log(angryProfessor(k2, a2));    //YES
console.log(angryProfessor(k3, a3));    //NO



