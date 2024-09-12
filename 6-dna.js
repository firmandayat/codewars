// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
function DNAtoRNA(dna) {
  let rna = '';
  for (let i = 0; i < dna.length; i++) { // looping, i adalah indeks yang akan digunakan untuk mengakses setiap karakter dalam string dna.
    if (dna[i] == "T" || dna[i] == "t") { // memeriksa apakah karakter pada indeks i dari string dna ada karakter T atau t
      rna += "U"; // += menambah nilai ke variabel yang sudah ada yaitu rna tanpa perlu menulis ulang. jadi rna = rna + "U"
    } else {
      rna += dna[i];
    }
  }
  return rna; // hasil konversi dieksekusi
}
console.log(DNAtoRNA('RSAT'));

// cara 2 ternary
// function DNAtoRNA(dna) {
//   let rna = '';
//   for (let i = 0; i < dna.length; i++) { // looping, i adalah indeks yang akan digunakan untuk mengakses setiap karakter dalam string dna.
//     rna += dna[i] == 'T' || dna[i] == 't' ? "U" : dna[i]
//   }
//   return rna; // hasil konversi dieksekusi
// }
// console.log(DNAtoRNA('RSAttT'));

// cara 3 function js dan regex
// function DNAtoRNA(dna) {
//   return dna.replaceAll(/T/gi, "U"); // i: Case-insensitive flag, artinya huruf besar dan kecil 'T' (baik 'T' maupun 't') akan dicari dan diganti.
// }
// console.log(DNAtoRNA('RSAttT'));

// cara 4 arrow function
// split() membagi string dna menjadi array karakter individual
// map() adalah metode array yang menerapkan fungsi ke setiap elemen dalam array dan mengembalikan array baru dengan hasil dari fungsi tersebut
// join() menggabungkan array karakter kembali menjadi string tunggal tanpa pemisah di antara karakter-karakter tersebut.
// const DNAtoRNA = dna => dna.split('').map((el)=>(el === 'T' || el === 't' ? 'U' : el)).join('')
// console.log(DNAtoRNA('RSAttT'));

const DNAtoRNA = (dna) => dna.split("T").join("U").split("t").join("U");
console.log(DNAtoRNA('RSAttT'));
