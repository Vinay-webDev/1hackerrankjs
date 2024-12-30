//super reduced string
const s = "abba";
const s2 = "abbdiiibb";

const superReducedString = (s) => {
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === s[i]) {
            //don't know how to implement this deletion operation
        }
    }
}