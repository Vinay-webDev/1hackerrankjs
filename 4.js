
/*
There is a sequence of words in CamelCase as a string of letters, , having the following properties:

It is a concatenation of one or more words consisting of English letters.
All letters in the first word are lowercase.
For each of the subsequent words, the first letter is uppercase and rest of the letters are lowercase.
Given , s determine the number of words in s.


saveChangesInTheEditor

5
*/

const s = "saveChangesInTheEditor";
const s2 = "helloBroWhatsUpHowYouDoing";

function camelcase(s) {
    let count = 1;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i].toUpperCase()) {
            count++
        }
    }
    return count;
}
console.log(camelcase(s));
console.log(camelcase(s2));




