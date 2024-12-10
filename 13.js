
const {x, y, z} = {x: 1, y: 2, z: 3};
const {x2, y2, z2} = {x2: 1, y2: 3, z2: 2};

/*both cats CatA and CatB are moving at same speed 
so don't worry about speed*/
const catAndMouse = (x, y, z) => {
    let distA = Math.abs(z - x);
    let distB = Math.abs(z - y);

    if (distA === distB) {
        return "Mouse C";
    } else if (distA < distB) {
        return "Cat A";
    } else {
        return "Cat B";
    }
}
console.log(catAndMouse(x, y, z));     //Cat B
console.log(catAndMouse(x2, y2, z2));  //Mouse C




