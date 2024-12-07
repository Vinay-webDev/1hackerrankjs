const n = 4;
const n2 = 6;
function staircase(n) {
    for ( let i = 1; i <= n; i++ ) {
        let symbol = "";
        for ( let j = 1; j <= n - i; j++ ) {
            symbol += " ";
        }
        for ( let k = 1; k <= i; k++ ) {
            symbol += "#";
        }
        console.log(symbol);
    }
}
staircase(n);
//    #
//   ##
//  ###
// ####
staircase(n2);
//      #
//     ##
//    ###
//   ####
//  #####
// ######

