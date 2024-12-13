//valley
const {steps1, path1} = {steps1: 8, path1: "DDUUUUDD"};
const {steps2, path2} = {steps2: 8, path2: "UDDDUDUU"};
const countValleys = (s, p) => {
    let count = 0;
    let seaLevel = 0;

    for (let i = 0; i < p.length; i++) {
        if (p[i] === "D") {
            seaLevel++;
        }
        if (p[i] === "U") {
            seaLevel--;
        }
    }
    return count;
} 




// console.log(countValleys(steps1, path1)); //1
// console.log(countValleys(steps2, path2)); //2