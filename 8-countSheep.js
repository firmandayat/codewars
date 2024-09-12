// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077
function countSheep(num) {
  let result = "";
  for (let i = 1; i <= num; i++) {
    result += `${i} sheep...`; // i + ' sheep...'
  }
  return result;
};
console.log(countSheep(3));

// cara 2
// Spread operator [...] digunakan untuk mengubah array tersebut menjadi array yang bisa diiterasi oleh map().
// Array(num) membuat array dengan panjang num tapi tidak berisi nilai apa pun.
// map() diterapkan pada array yang berisi elemen kosong.
// join() menggabungkan array karakter kembali menjadi string tunggal tanpa pemisah di antara karakter-karakter tersebut.
// const countSheep = (num) => [...Array(num)].map((el, i) => `${i+1} sheep...`).join('');
// console.log(countSheep(3));
