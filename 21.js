//kangaroo
/*
You are choreographing a circus show with various animals. For one act, you are given two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity).

The first kangaroo starts at location x1 and moves at a rate of v1 meters per jump.
The second kangaroo starts at location x2 and moves at a rate of v2 meters per jump.
You have to figure out a way to get both kangaroos at the same location at the same time as part of the show. If it is possible, return YES, otherwise return NO.
*/

function kangarooOne(x1, v1, x2, v2) {
    // Write your code here
    const kango1 = x1 + v1;
    const kango2 = x2 + v2;
    if (x2 > x1 && v2 > v1) {
        return "NO";
    } else if (kango1 == kango2) {
        return "YES";
    } else {
        return "NO";
    }
}
// console.log(kangarooOne(x1, v1, x2, v2));
//❌❌❌WRONG ANSWER❌❌❌
//////////////////////////////////////////////////////
// to be able to find if they meet we need to find the number of steps it would require

// x1 + n * v1 = x2 + n * v2
// n = (x2 - x1) / (v1 - v2)
const {x1, v1, x2, v2} = {x1: 0, v1: 2, x2: 5, v2: 3};
const {y1, s1, y2, s2} = {y1: 0, s1: 3, y2: 4, s2: 2};
const kangaroo = (x1, v1, x2, v2) => {
    if ((x2 > x1 && v2 > v1) || (x1 > x2 && v1 > v2)) {
        return "NO";
    }
    const n = (x2 - x1) / (v1 - v2);

    if (n > 0 && Number.isInteger(n)) {
        return "YES";
    } else {
        return "NO";
    }
}
console.log(kangaroo(x1, v1, x2, v2));  //NO
console.log(kangaroo(y1, s1, y2, s2));  //YES


