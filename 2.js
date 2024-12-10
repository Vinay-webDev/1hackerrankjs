const s = "07:05:45PM";
const s2 = "12:00:00AM";
const s3 = "09:50:40AM";
const s4 = "12:00:00PM";
const s5 = "10:50:45PM";
const s6 = "12:40:22AM";
const timeConverter = (s) => {
    let res = "";
    const num = parseInt(s.slice(0,2));
    const am = s.slice(s.length - 2, s.length);
    const body = s.slice(2, s.length - 2);
    if (num < 12) {
        if (am === "PM") {
            res = (num+12).toString().padStart(2,"0") + body;
        } else {
            res = num.toString().padStart(2,"0") + body;
        }
    } 
    if (num === 12) {
        if (am === "PM") {
            res = num.toString().padStart(2,"0") + body;
        } else {
            res = "00" + body;
        }
    }
    return res;
}
console.log(timeConverter(s));  //19:05:45
console.log(timeConverter(s2)); //00:00:00
console.log(timeConverter(s3)); //09:50:40
console.log(timeConverter(s4)); //12:00:00
console.log(timeConverter(s5)); //22:50:45
console.log(timeConverter(s6)); //00:40:22



