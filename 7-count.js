// www.codewars.com/kata/5513795bd3fafb56c200049e/train/javascript
  function countBy(x, n) {
  let z = [];
  for (let i = 1; i <= n; i++) {
    z.push(i * x); // Pada setiap iterasi, i dikalikan dengan x (faktor kelipatan) dan hasilnya ditambahkan ke array z menggunakan metode push().
  }
  return z;
}
console.log(countBy(2, 5));

// cara 2
//Spread operator [...] digunakan untuk mengubah array tersebut menjadi array yang bisa diiterasi oleh map().
// Array(n) membuat array dengan panjang n tapi tidak berisi nilai apa pun.
// map() diterapkan pada array yang berisi elemen kosong.
countBy = (x, n) => [...Array(n)].map((el, i) => (i + 1) * x);
console.log(countBy(2, 5));
