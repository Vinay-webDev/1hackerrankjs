//Two Characters
// I need to know how to check a alternatively repeating string!
/*
Given a string, remove characters until the string is made up of any two alternating characters. When you choose a character to remove, all instances of that character must be removed. Determine the longest string possible that contains just two alternating letters.
*/
const s2 = "abababab";
const s3 = "12121212121212";
const s4 = "100303";
//👇 this is wrong as it only capable for the even length of alternate string it won't work if the alternate string is odd length
const checkAltStrOne = (s) => {
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
// console.log(checkAltStrOne(s2));
// console.log(checkAltStrOne(s3));
// console.log(checkAltStrOne(s4));
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
const twoCharactersOne = (s) => {
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

/////////////////////////////////////////////////////////////////////////
//helper func
const checkAltStrTest = (s) => {
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i+1]) {
            return false;
        }
    }
    return true;
}

//helper func using two 2 pointers😂
const checkAltStr2PointerTest = (s) => {
    let l1 = 0;
    let l2 = 1;

    while (l2 < s.length) {
        if (s[l1] === s[l2]) {
            return false;
        }
        l1++;
        l2++;
    }
    return true;
} 
//how to generate unique pairs without repeating!;
const testStr = "abcabd";
const test = (s) => {
    const uniqueCharacters = [...new Set(s)];
    let arr = [];
    for (let i = 0; i < uniqueCharacters.length; i++) {
        for (let j = i + 1; j < uniqueCharacters.length; j++) {
            const char1 = uniqueCharacters[i];
            const char2 = uniqueCharacters[j];
            arr.push([char1, char2]);
        }
    }
    return arr;
}
// console.log(test(s));
// [
//     [ 'a', 'b' ],
//     [ 'a', 'c' ],
//     [ 'a', 'd' ],
//     [ 'b', 'c' ],
//     [ 'b', 'd' ],
//     [ 'c', 'd' ]
// ]

const testTwo = (s) => {
    const uniqueCharacters = [...new Set(s)];
    let arr = [];
    for (let i = 0; i < uniqueCharacters.length; i++) {
        for (let j = i + 1; j < uniqueCharacters.length; j++) {
            const char1 = uniqueCharacters[i];
            const char2 = uniqueCharacters[j];
            arr.push(s.split("").filter((c) => c === char1 || c === char2).join("")); 
        }
    }
    return arr;
}
// console.log(testTwo(s)); //['abaab', 'aaaca', 'aaadad', 'bcb', 'bdbd', 'cdd']
///////////////////////////////////////////////////////////////////////////////////
const s = "abaacdabd";
const s5 = "beabeefeab";
const twoCharacters = (s) => {
    const uniqueCharacters = [...new Set(s)];
    let maxLength = 0;
    function checkAltStr (s) {
        let l1 = 0;
        let l2 = 1;
    
        while (l2 < s.length) {
            if (s[l1] === s[l2]) {
                return false;
            }
            l1++;
            l2++;
        }
        return true;
    } 
    for (let i = 0; i < uniqueCharacters.length; i++) {
        for (let j = i + 1; j < uniqueCharacters.length; j++) {
            const char1 = uniqueCharacters[i];
            const char2 = uniqueCharacters[j];

            const filteredStr = s.split("").filter((c) => c === char1 || c === char2).join("");

            if (checkAltStr(filteredStr)) {
                console.log(filteredStr);
                maxLength = Math.max(maxLength, filteredStr.length);
            }
        }
    }
    return maxLength;
}
console.log(twoCharacters(s));  //4
console.log(twoCharacters(s5)); //5

const checkAltStr1 = (s) => {
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i+1]) {
            return false;
        }
    }
    return true;
}
const checkAltStr2 = (s) => {
    let l1 = 0;
    let l2 = 1;

    while (l2 < s.length) {
        if (s[l1] === s[l2]) {
            return false;
        }
        l1++;
        l2++;
    }
    return true;
} 







