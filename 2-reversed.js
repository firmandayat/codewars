// https://www.codewars.com/kata/5a00e05cc374cb34d100000d/train/javascript
const reverseSeq = (n) => {
    const result = []
    for (let index = n; index >= 1; index--) {
    result.push(index)
    }
  return result;
};
console.log(reverseSeq(5));

// cara 2
// const result = []
// for (let index = 5; index >= 1; index--) {
//     result.push(index)
// }
// console.log(result);

// cara 3
// Spread operator [...] digunakan untuk mengubah array tersebut menjadi array yang bisa diiterasi oleh map().
// Array(n) membuat array dengan panjang n tapi tidak berisi nilai apa pun.
// const reverseSeq = (n) => [...Array(n)].map((el, i) => n - i) 
// console.log(reverseSeq(5));
