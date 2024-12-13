//Breaking records
const scores1 = [10, 5, 20, 20, 4, 5, 2, 25, 1];
const scores2 = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
const breakingRecords = (scores) => {
    let currentBest = scores[0];
    let currentWorst = scores[0];
    let countBest = 0;
    let countWorst = 0;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] > currentBest) {
            currentBest = scores[i];
            countBest++;
        }
        if (scores[i] < currentWorst) {
            currentWorst = scores[i];
            countWorst++;
        }
    }
    return [countBest, countWorst];
}
console.log(breakingRecords(scores1));  //[2, 4]
console.log(breakingRecords(scores2));  //[4, 0]




