/*remove a letter to make it palindrome */

s = "aaab";
s2 = "bcbc";
s3 = "malayalamn";
const palindromeIndex = (s) => {
    let letters = s.split("");
    let newArr =  [];

    function removeAtIndex(array, index) {
        array.splice(index, 1);
        return array;
    }      

    for (let i = 1; i < letters.length; i++) {
        if (letters[i] !== letters[i - 1]) {
            // try to check at both indices i - 1 and i 
            // newArr = letters.splice(i - 1, 1);
            newArr = removeAtIndex(letters, i - 1);
            // console.log(newArr);
            if (newArr.join("") === newArr.reverse().join("")) {
                return i - 1;
            } else {
                return i;
            }
        }
    }
    return -1;
}
console.log(palindromeIndex(s));
console.log(palindromeIndex(s2));
console.log(palindromeIndex(s3));

// this answer is so bad😭😭 // this blind solution😭😭😭








