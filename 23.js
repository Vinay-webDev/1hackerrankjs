//valley
const {steps1, path1} = {steps1: 8, path1: "DDUUUUDD"};
const {steps2, path2} = {steps2: 8, path2: "UDDDUDUU"};
const {steps3, path3} = {steps3: 12, path3: "DDUUUUDDDDUU"};
const countingValleys = (s, p) => {
    let count = 0;
    let seaLevel = 0;
    for (let i = 0; i < p.length; i++) {
        if (p[i] === "D") {
            seaLevel--;
        }
        if (p[i] === "U") {
            seaLevel++;
        }
        if (seaLevel === 0 && p[i] === "U") {
            count++;
        }
    }
    return count;
} 
console.log(countingValleys(steps1, path1)); //1
console.log(countingValleys(steps2, path2)); //1
console.log(countingValleys(steps3, path3)); //2



