const h1 = [1, 3, 1, 3, 1, 4, 1, 3, 2,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 
            5, 5, 5, 5, 5, 5, 5, 5];
const word1 = "abc";
const h2 = [1, 3, 1, 3, 1, 4, 1, 3, 2,
            5, 5, 5, 5, 5, 5, 5, 5, 5, 
            5, 5, 5, 5, 5, 5, 5, 7];
const word2 = "zaba";
const designerPdfViewer = (h, word) => {
    const lexOrder = {
        a: 0,b: 1,c: 2,d: 3,e: 4,f: 5,g: 6,h: 7,
        i: 8,j: 9,k: 10,l: 11,m: 12,n: 13,o: 14,
        p: 15,q: 16,r: 17,s: 18,t: 19,u: 20,v: 21,
        w: 22,x: 23,y: 24,z: 25
    };
    let hArr = [];
    for (let i = 0; i < word.length; i++) {
        hArr.push(h[lexOrder[word[i]]]);
    }
    const max = Math.max(...hArr);
    const area = max * hArr.length;
    return area;
}
console.log(designerPdfViewer(h1, word1));   //9
console.log(designerPdfViewer(h2, word2));   //28






