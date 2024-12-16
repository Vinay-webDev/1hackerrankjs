//climbing leaderboard
// 6
// 100 90 90 80 75 60
// 5
// 50 65 77 90 102
////
// 6
// 5
// 4
// 2
// 1
const {ranked1, player1, ranked2, player2} = {
    ranked1: [100, 90, 80, 75, 60],
    player1: [50, 65, 77, 90, 102],
    ranked2: [100, 100, 50, 40, 40, 20, 10],
    player2: [5, 25, 50, 120]
};
const climbingLeaderboard = (ranked, player) => {
    let answer = [];
    let leaderBoard = [...new Set(ranked)];
    for (let i = 0; i < player.length; i++) {
        leaderBoard.push(player[i]);
    }
    const newArr = [...new Set(leaderBoard.sort((a, b) => b - a))]
    console.log(newArr);
    for (let j = 0; j < player.length; j++) {
        answer.push(newArr.indexOf(player[j]));
    }
    return answer;
}
console.log(climbingLeaderboard(ranked2, player2)); //[7, 4, 2, 0];
//❌❌❌WRONG ANSWER❌❌❌