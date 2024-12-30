//Append and Delete
const {s, t, k} = {s:["a", "b", "c"], t:["d", "e", "f"], k: 6};

const appendAndDelete = (s, t, k) => {
    let left = 0;
    let right = 0;
    let state = true;
    let sLen = 0;
    let tLen = 0; 
    
    while (state) {
        if (s[left] !== s[right]) {
            state = false;
            sLen = s.slice(left, s.length).length;
            tLen = t.slice(right, t.lenght).length;
        }
        left++;
        right++;
    }    
}