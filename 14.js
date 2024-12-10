//Strong password


const strongPasswordMyTry = (s) => {
    let asciiCount = 0;
    let lowercase = false;
    let uppercase = false;
    let digits = false;
    let specialCharacter = false;
    for (let i = 0; i < s.length; i++) {
        const code = s.charCodeAt(i);
        if (!lowercase && code >= 97 && code <= 122) {
            lowercase = true;
            asciiCount++;
        } else if (!uppercase && code >= 65 && code <= 90) {
            uppercase = true;
            asciiCount++;
        } else if (!digits && code >= 48 && code <= 57) {
            digits = true;
            asciiCount++;
        } else if (!specialCharacter && ((code >= 33 && code <= 45) || code === 64)) {
            specialCharacter = true;
            asciiCount++;
        }
    }
    const missingConditions = 4 - asciiCount;
    return Math.max(missingConditions, 6 - s.length);
}
// console.log(strongPasswordMyTry(s));   //3
// console.log(strongPasswordMyTry(s2));  //1
// console.log(strongPasswordMyTry(s3));  //1
// console.log(strongPasswordMyTry(s4));  //2 wrong
// console.log(strongPasswordMyTry(s5));  //3 wrong
// console.log(strongPasswordMyTry(s6));  //2 wrong
// console.log(strongPasswordMyTry(s7));  //0 wrong
// console.log(strongPasswordMyTry(s8));  //2 wrong
// this has few issues🫠🫠🫠
//even with GPT help it still couldn't pass all test cases failed 10 out of 90🫠🫠🫠


const s = "Ab1";
const s2 = "#Hackerrank";
const s3 = "Mypassword12345678910";
const s4 = "E!%Z@";
const s5 = "!%&&&*!%(&*^&^)(*^-)$&)#%@$*&(@(@$#))+#)+-!**^&(#!&^#@#*&)!%&^^+($@#!*)+$!-&!-()@$&+%@-)@$*@$+((@-^)";
const s6 = "#17$9-4-66)07)5(7%)1!@8495(4*28)4!2(6!3%&+3517+41$4*112-&2)!23956&636)72)01&)33$7(!867!*728!$806+(#5";
const s7 = "G0N1+93Gy0C!J4ECIc53+30O9az$K-TgDO^051y2+Qfvt94qI!k)lS(-8g65^A9mt%eRL5WP#f8R)i4O33j#&LNk6H%-pr-@d^*Z";
const s8 = "0(27^9@";
const strongPassword = (password) => {
    let lowercase = false;
    let uppercase = false;
    let digits = false;
    let specialCharacter = false;
    const specials = "!@#$%^&*()-+";
    for (let i = 0; i < password.length; i++) {
        const code = password.charCodeAt(i);
        if (!lowercase && code >= 97 && code <= 122) {
            lowercase = true;
        } else if (!uppercase && code >= 65 && code <= 90) {
            uppercase = true;
        } else if (!digits && code >= 48 && code <= 57) {
            digits = true;
        } else if (!specialCharacter && specials.includes(password[i])) {
            specialCharacter = true;
        }
        if (lowercase && uppercase && digits && specialCharacter) {
            break;
        }
    }
    const missingConditions = 
        (!lowercase ? 1 : 0) +
        (!uppercase ? 1 : 0) +
        (!digits ? 1 : 0) +
        (!specialCharacter ? 1 : 0);

    return Math.max(missingConditions, 6 - password.length);
};
console.log(strongPassword(s));     //3    
console.log(strongPassword(s2));    //1
console.log(strongPassword(s3));    //1
console.log(strongPassword(s4));    //2
console.log(strongPassword(s5));    //3
console.log(strongPassword(s6));    //2
console.log(strongPassword(s7));    //0
console.log(strongPassword(s8));    //2






//🟢 it must have altease 6 length (password.length >= 6)
//🟢 it must have atleast 1 lowercase ("abcdefghijklmnopqrstuvwxyz") ascii 97 - 122
//🟢 it must have atleast 1 uppercase ("ABCDEFGHIJKLMNOPQRSTUVWXYZ") ascii 65 - 90;
//🟢 it must have atleast 1 digit ("0123456789") ascii 48 to 57;
//🟢 it must have atleast 1 special character ("!@#$%^&*()-+") ascii 33 to 45;
















// const strongPasswordGPT = (s) => {
//     let asciiCount = 0;
//     let lowercase = false;
//     let uppercase = false;
//     let digits = false;
//     let specialCharacter = false;

//     for (let i = 0; i < s.length; i++) {
//         const charCode = s.charCodeAt(i);

//         // Check lowercase
//         if (!lowercase && charCode >= 97 && charCode <= 122) {
//             lowercase = true;
//             asciiCount++;
//         }
//         // Check uppercase
//         else if (!uppercase && charCode >= 65 && charCode <= 90) {
//             uppercase = true;
//             asciiCount++;
//         }
//         // Check digits
//         else if (!digits && charCode >= 48 && charCode <= 57) {
//             digits = true;
//             asciiCount++;
//         }
//         // Check special characters
//         else if (
//             !specialCharacter &&
//             ((charCode >= 33 && charCode <= 45) || charCode === 64) // Include '@'
//         ) {
//             specialCharacter = true;
//             asciiCount++;
//         }
//     }

//     // Calculate the number of missing conditions
//     const missingConditions = 4 - asciiCount;

//     // Account for length condition
//     return Math.max(missingConditions, 6 - s.length);
// };

// console.log(strongPassword("Ab1"));          // Output: 3
// console.log(strongPassword("#Hackerrank"));  // Output: 1
