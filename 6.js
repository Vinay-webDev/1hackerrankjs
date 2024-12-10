/*pangram*/

// const pangram = (s) => {
//     const str = "abcdefghijklmnopqrstuvwxyz";
//     const alpha = new Set(str);
//     let checkMap = new Map();
//     //console.log(alpha);
//     let check = 0;
//     for (let i = 0; i < s.length; i++) {
//         if (str.has(s[i].toLowerCase())) {
//             if (checkMap.has())
//         }
//     }
// }
// pangram()

s = "the quick brown fox jumps over the lazy dog";
s2 = "qmExzBIJmdELxyOFWv LOCmefk TwPhargKSPEqSxzveiun";
const pangram = (s) => {
    let check = new Set();
    for (let i = 0; i < s.length; i++) {
        if (check.has(s[i].toLowerCase())) {
            continue;
        } 
        if (s[i] !== " ") {
            check.add(s[i].toLowerCase());
        }
    }
    console.log(check);
    if (check.size === 26) {
        return "pangram";
    } else {
        return "not a pangram";
    }
}
console.log(pangram(s));  //pangram
console.log(pangram(s2)); //pangram








