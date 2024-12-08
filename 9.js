//Two Strings
const s1 = "and";
const s2 = "art";
const s3 = "hello";
const s4 = "world";
const s5 = "hi";
const s6 = "world";
const twoStrings = (s1, s2) => {
    const strSet = new Set(s1);
    for (let i = 0; i < s2.length; i++) {
        if (strSet.has(s2[i])) {
            return "YES";
        }
    }
    return "NO";
}
console.log(twoStrings(s1, s2));  //YES
console.log(twoStrings(s3, s4));  //YES
console.log(twoStrings(s5, s6));  //NO


