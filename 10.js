//Funny String
const s = "lmnop";
const s2 = "bcxz";
const funnyString = (s) => {
    const s2 = s.split("").reverse().join("");
    let sArr = [];
    let s2Arr = [];
    for (let i = 0; i < s.length - 1; i++) {
        sArr.push(Math.abs(s.charCodeAt(i + 1) - s.charCodeAt(i)));
    }
    for (let j = 0; j < s2.length - 1; j++) {
        s2Arr.push(Math.abs(s2.charCodeAt(j + 1) - s2.charCodeAt(j)));
    }
    if (sArr.join("") === s2Arr.join("")) {
        return "Funny";
    } else {
        return "Not Funny";
    }
}
console.log(funnyString(s));  //Funny
console.log(funnyString(s2)); //Not Funny







