//library fine

//y: 10000
//m: 500
//d: 15
const libraryFineOne = (d1, m1, y1, d2, m2, y2) => {
    let fine = 0;
    if (y1 < y2) {
        return 0;
    }
    if (y1 === y2 && m1 < m2) {
        return 0;
    }
    if (y1 === y2 && m1 === m2 && d1 < d2) {
        return 0;
    }
    if (y1 === y2 && m1 === m2 && d1 === d2) {
        return 0;
    }
    if (y1 > y2) {
        return fine += 10000 * Math.abs(y1 - y2);
    } 
    if (m1 > m2) {
        return fine += 500 * Math.abs(m1 - m2);
    } 
    if (d1 > d2) {
        return fine += 15 * Math.abs(d1 - d2);
    } 
}
// console.log(libraryFineOne(d1, m1, y1, d2, m2, y2));   //45
// console.log(libraryFineOne(d1a, m1a, y1a, d2a, m2a, y2a));   //10000
// console.log(libraryFineOne(d1b, m1b, y1b, d2b, m2b, y2b));   //0
//Nub code idk why I was lazy

const {d1, m1, y1, d2, m2, y2} 
= {d1: 9, m1: 6, y1: 2015, d2: 6, m2: 6, y2: 2015};
const {d1a, m1a, y1a, d2a, m2a, y2a} 
= {d1a: 29, m1a: 5, y1a: 2011, d2a: 10, m2a: 3, y2a: 2010}
const {d1b, m1b, y1b, d2b, m2b, y2b} 
= {d1b: 2, m1b: 7, y1b: 1014, d2b: 1, m2b: 1, y2b: 1015};
const libraryFine = (d1, m1, y1, d2, m2, y2) => {
    if (y1 > y2) {
      return 10000; 
    } else if (y1 === y2 && m1 > m2) {
      return 500 * (m1 - m2);
    } else if (y1 === y2 && m1 === m2 && d1 > d2) {
      return 15 * (d1 - d2);
    } else {
      return 0;
    }
};
console.log(libraryFine(d1, m1, y1, d2, m2, y2));       //45
console.log(libraryFine(d1a, m1a, y1a, d2a, m2a, y2a)); //10000
console.log(libraryFine(d1b, m1b, y1b, d2b, m2b, y2b)); //0





