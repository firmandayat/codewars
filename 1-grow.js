// https://www.codewars.com/kata/57f780909f7e8e3183000078
// cara 1
function grow(x) { // Mendefinisikan sebuah fungsi bernama grow yang menerima satu parameter x.
    let result = x[0] // Mendeklarasikan variabel result dan menginisialisasinya dengan elemen pertama dari array x (yaitu x[0]). Nilai x[0] ini akan menjadi dasar untuk penghitungan selanjutnya
    for (let i = 1; i < x.length; i++) { //Memulai sebuah loop for yang dimulai dari indeks i = 1 hingga i mencapai panjang array x (x.length). Loop ini digunakan untuk mengalikan setiap elemen dalam array.
        result *= x[i] //  nilai result diperbarui dengan mengalikan nilai result yang saat ini dengan elemen array x[i]. Operasi ini dilakukan secara berturut-turut untuk semua elemen mulai dari indeks 1 hingga indeks terakhir dalam array.
    }
    return result //Setelah loop selesai, fungsi mengembalikan nilai result, yang merupakan hasil dari perkalian semua elemen dalam array x.
}
console.log(grow([2,2,2,2,2,2]));

// cara 2
// function grow(x) {
//   // acc adalah akumulator yang menyimpan hasil akumulasi dari iterasi sebelumnya.
//   // curr adalah elemen saat ini dalam iterasi.
//   const result = x.reduce((acc, curr) => acc * curr); // reduce adalah fungsi bawaan JavaScript yang mengiterasi setiap elemen dalam array untuk mengakumulasikan nilai berdasarkan operasi yang ditentukan.
//   return result;
// }
// console.log(grow([1,2,3]));

// cara 3
// const grow = (x) => x.reduce((acc, curr) => acc * curr);
// console.log(grow([1, 2, 3]));