//Repeated String
/*
I figured out formula on my own (12th chemistry knowledge btw😏)
              n x aCount
no. of a's = -----------
               s.length
 */
const repeatedStringMyTry = (s, n) => {
    let noOfAs = 0;
    let aCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") {
            aCount++;
        }
    }
    if (s.length % 2 === 0) {
        noOfAs = Math.floor((n * aCount) / s.length);
    } else {
        noOfAs = Math.ceil((n * aCount) / s.length);
    }
    return noOfAs;
}
// console.log(repeatedStringMyTry(s1, n1));  //4
// console.log(repeatedStringMyTry(s2, n2));  //7
// console.log(repeatedStringMyTry(s3, n3));  //1000000000000
// console.log(repeatedStringMyTry(s4, n4));  //164280.6 ==>> 164281❌ 164280✅
// console.log(repeatedStringMyTry(s5, n5));  //112436.375 ==>> 112437❌ 112436✅
// console.log(repeatedStringMyTry(s6, n6));  //588524.66666 ==>> 588524❌ 588525✅
// console.log(repeatedStringMyTry(s7, n7));  //138511468547❌ 138511468548✅

//❌❌❌WRONG ANSWER❌❌❌
//❌❌❌WRONG ANSWER again❌❌❌
//🧠🧠🧠I FIGURED OUT WHAT WENT WRONG GPT POWER🧠🧠
// I was doing just for the full repeats I left the small after repeats for the rounding (Math.floor, Math.ceil) which is incorrect!!
//now let's calculate without leaving the small poriton

const {s1, n1} = {s1: "abcac", n1: 10};
const {s2, n2} = {s2: "aba", n2: 10};
const {s3, n3} = {s3: "a", n3: 1000000000000};
const {s4, n4} = {s4: "gfcaaaecbg", n4: 547602};
const {s5, n5} = {s5: "jdiacikk", n5: 899491};
const {s6, n6} = {s6: "aab", n6: 882787};
const {s7, n7} = {s7: "cfimaakj", n7: 554045874191};
const repeatedString = (s, n) => {
    let noOfAs = 0;
    let aCount = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") {
            aCount++;
        }
    }
    const fullRepeats = Math.floor( n / s.length);
    const leftPortion = n % s.length;
    noOfAs = fullRepeats * aCount;
    for (let j = 0; j < leftPortion; j++) {
        if (s[j] === "a") {
            noOfAs++;
        }
    }
    return noOfAs;
}
console.log(repeatedString(s1, n1));  //4
console.log(repeatedString(s2, n2));  //7
console.log(repeatedString(s3, n3));  //1000000000000
console.log(repeatedString(s4, n4));  //164280
console.log(repeatedString(s5, n5));  //112436
console.log(repeatedString(s6, n6));  //588525
console.log(repeatedString(s7, n7));  //138511468548






