//Bon appetit
const {bill, k, b} = {bill: [2, 4, 6], k: 2, b: 3};
const {bill2, k2, b2} = {bill2: [2, 4, 6], k2: 2, b2: 6};
const {bill3, k3, b3} = {bill3: [3, 10, 2, 9], k3: 1, b3: 12};
const {bill4, k4, b4} = {bill4: [3, 10, 2, 9], k4: 1, b4: 7};
const bonAppetit = (bill, k, b) => {
    let fair = 0;
    let unFair = 0;
    for (let i = 0; i < bill.length; i++) {
        if (bill[i] != bill[k]) {
            fair += bill[i] / 2;
        }
        unFair += bill[i] / 2;
    }
    const refund = unFair - fair;
    if (fair === b) {
        return "Bon Appetit"; 
    } else {
        return refund;
    }
}
console.log(bonAppetit(bill, k, b));        //Bon Appetit
console.log(bonAppetit(bill2, k2, b2));     //3
console.log(bonAppetit(bill3, k3, b3));     //5
console.log(bonAppetit(bill4, k4, b4));     //Bon Appetit


// const k = 2
// const bill = [2, 4, 6];
// const b = 3;
// const k2 = 1;
// const bill2 = [3, 10, 2, 9];
// const b2 = 12;