// https://www.codewars.com/kata/53dc23c68a0c93699800041d
// function smash (words) {
//    return words.join(' ')
// };
// console.log(smash(["hello", "amazing", "world"]));

// const smash = (words) => words.join(' ')
// console.log(smash(["hello", "amazing", "world"]));

// cara 2
function smash(words){
  let result = ""; //digunakan untuk menyimpan gabungan kata-kata dari array words
  for (let i = 0; i < words.length; i++) {
    result += words[i]; // Pada setiap iterasi, kata words[i] ditambahkan ke variabel result. Ini adalah bagian yang menggabungkan kata-kata.
    if (i != words.length - 1) result += " "; // Jika kondisi ini benar (artinya kata tersebut bukan kata terakhir), maka fungsi menambahkan spasi (' ') setelah kata tersebut di variabel result. Ini memastikan bahwa spasi hanya ditambahkan di antara kata-kata, bukan setelah kata terakhir.
  }
  return result;
}
console.log(smash(["hello", "amazing", "world"]));
