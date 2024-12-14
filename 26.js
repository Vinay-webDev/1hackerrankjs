//The Hurdle Race
const {k1, height1} = {k1: 1, height1: [1, 2, 3, 3, 2]};
const {k2, height2} = {k2: 4, height2: [1, 6, 3, 5, 2]};
const {k3, height3} = {k3: 7, height3: [2, 5, 4, 5, 2]};
const hurdleRace = (k, height) => {
    const maxHurdle = Math.max(...height);
    const dose = maxHurdle - k;
    if (dose <= 0) {
        return 0;
    } else {
        return dose;
    }
}
console.log(hurdleRace(k1, height1));   //2
console.log(hurdleRace(k2, height2));   //2
console.log(hurdleRace(k3, height3));   //0


