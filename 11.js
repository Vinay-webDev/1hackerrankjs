//Two Characters
// I need to know how to check a alternatively repeating string!
/*
Given a string, remove characters until the string is made up of any two alternating characters. When you choose a character to remove, all instances of that character must be removed. Determine the longest string possible that contains just two alternating letters.
*/
const s = "abaacdabd";
const s2 = "abababab";
const s3 = "12121212121212";
const s4 = "100303";
const checkAltStr = (s) => {
    let l1 = 0;
    let r1 = s.length - 2;
    let l2 = 1;
    let r2 = s.length - 1;
    while (l1 < r1 && l2 < r2) {
        if (s[l1] !== s[r1] && s[l2] !== s[r2]) {
            return false;
        } 
        l1++;
        r1--;
        l2++;
        r2--;
    }
    return true;
}
// console.log(checkAltStr(s2));
// console.log(checkAltStr(s3));
// console.log(checkAltStr(s4));
// I've figured out how to check for a alternatively repeating string now I can easily solve this problem ig;

//1. first Ig I need to delete the character that is present more than one time adjacently!
const deleteTheChar = (s) => {
    const arr = s.split("");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            return arr.filter((e) => e !== arr[i]);
        }
    }
    return arr;
}
// console.log(deleteTheChar(s4));
// console.log(deleteTheChar(s3));

//2. maybe the final function
const twoCharacters = (s) => {
    const arr = s.split("");
    let tempStr = "";
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] == arr[i + 1]) {
            temp = arr.filter((e) => e !== arr[i]).join("");
        }
    }
    if (checkAltStr(tempStr)) {
        return tempStr.length;
    }
}