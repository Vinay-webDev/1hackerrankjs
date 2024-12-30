const {x, y, z} = {x: 1, y: 2, z: 3}

const catAndMouse = (x, y, z) => {
    return [x, y, z];
}
// console.log(catAndMouse(x, y, z)); //[1, 2, 3];

const array = [2, 3, 4, 84, 100];

// console.log(Math.max(...array));

// for (let i = 0; i <= 5; i++) {
//     console.log(i);
// }

// console.log(array.slice(2, array.length).length); //3

// const s = "hackerhappy";
// const t = "hackerrank";
// if (s.includes("hacker")) {
//     console.log(true);
// }//true

// const h = [1, 3, 4, 5, 5];
// const word = "abc";
// let hArr = [];
// const lexOrder = {
//     a: 0,b: 1,c: 2,d: 3,e: 4,f: 5,g: 6,h: 7,
//     i: 8,j: 9,k: 10,l: 11,m: 12,n: 13,o: 14,
//     p: 15,q: 16,r: 17,s: 18,t: 19,u: 20,v: 21,
//     w: 22,x: 23,y: 24,z: 25
// };
// // console.log(h[lexOrder[word[0]]]);
// for (let i = 0; i < word.length; i++) {
//     hArr.push(h[lexOrder.word[i]]);
// }
// console.log(hArr);
// console.log(Math.floor(1 / 2));
// const turnIn = 5 % 2; //1
// const turnIn2 = Math.floor(5 / 2);
// console.log(turnIn2);
let r = Math.floor(5 / 2) + (5 % 2);
let r2 = Math.ceil(5 / 2);
console.log(r);
console.log(r2);