//Strong password

const s = "Ab1";
const s2 = "#Hackerrank";
const s3 = "Mypassword12345678910";
const s4 = "E!%Z@";
const s5 = "!%&&&*!%(&*^&^)(*^-)$&)#%@$*&(@(@$#))+#)+-!**^&(#!&^#@#*&)!%&^^+($@#!*)+$!-&!-()@$&+%@-)@$*@$+((@-^)";
const s6 = "#17$9-4-66)07)5(7%)1!@8495(4*28)4!2(6!3%&+3517+41$4*112-&2)!23956&636)72)01&)33$7(!867!*728!$806+(#5";
const s7 = "G0N1+93Gy0C!J4ECIc53+30O9az$K-TgDO^051y2+Qfvt94qI!k)lS(-8g65^A9mt%eRL5WP#f8R)i4O33j#&LNk6H%-pr-@d^*Z";
const s8 = "0(27^9@";

const strongPassword = (s) => {
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
console.log(strongPassword(s));   //3
console.log(strongPassword(s2));  //1
console.log(strongPassword(s3));  //1
console.log(strongPassword(s4));  //2 wrong
console.log(strongPassword(s5));  //3 wrong
console.log(strongPassword(s6));  //2 wrong
console.log(strongPassword(s7));  //0 wrong
console.log(strongPassword(s8));  //2 wrong
// this has few issues🫠🫠🫠






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
