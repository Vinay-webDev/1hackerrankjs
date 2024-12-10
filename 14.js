//Strong password

const s = "Ab1";
const s2 = "#Hackerrank";
//🟢 it must have altease 6 length (password.length >= 6)
//🟢 it must have atleast 1 lowercase ("abcdefghijklmnopqrstuvwxyz") ascii 97 - 122
//🟢 it must have atleast 1 uppercase ("ABCDEFGHIJKLMNOPQRSTUVWXYZ") ascii 65 - 90;
//🟢 it must have atleast 1 digit ("0123456789") ascii 48 to 57;
//🟢 it must have atleast 1 special character ("!@#$%^&*()-+") ascii 33 to 45;
const strongPassword = (s) => {
    // const arr = s.split("");
    if (s.length < 6) {
        return 6 - s.length;
    }
    let asciiCount = 5;
    let lowercase = false;
    let uppercase = false;
    let digits = false;
    let specialCharacter = false;
    for (let i = 0; i < s.length; i++) {
        if (!lowercase && s.charCodeAt(i) >= 97) {
            lowercase = true;
            asciiCount--;
        } else if (!uppercase && s.charCodeAt(i) >= 65) {
            uppercase = true;
            asciiCount--;
        } else if (!digits && s.charCodeAt(i) >= 48) {
            digits = true;
            asciiCount--;
        } else if (!specialCharacter && s.charCodeAt(i) >= 35) {
            specialCharacter = true;
            asciiCount--;
        }
    }
    return asciiCount;
}
console.log(strongPassword(s));   //3
console.log(strongPassword(s2));  //1
// this has few issues🫠🫠🫠