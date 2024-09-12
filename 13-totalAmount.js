// https://www.codewars.com/kata/5bb904724c47249b10000131/train/javascript
function points(games) {
    let result = 0
    for (let i = 0; i < games.length; i++) {
        if (games[i][0]>games[i][2]) { //jika index ke 0 lebih besar dari index ke 2
            result += 3
        }else if (games[i][0] === games[i][2]) {
            result += 1
        }
    }
    return result
}
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));

// cara 2
// reduce() digunakan untuk mengakumulasi total poin dari semua pertandingan
// Accumulator (acc): Nilai awal adalah 0, dan setiap kali dilakukan iterasi, poin dari pertandingan akan ditambahkan ke acc sama seperti const result = 0 contoh di atas
// Array destructuring ([x, _, y]):
// x: Skor dari tim pertama.
// _: Tanda underscore (_) di sini mengabaikan skor atau elemen yang tidak diperlukan (bisa digunakan untuk tanda pemisah yang tidak digunakan).
// y: Skor dari tim kedua.
// acc + Setelah menentukan poin dari pertandingan tersebut, poin tersebut ditambahkan ke acc (akumulator).
points = games => games.reduce((acc, [x, _, y])=> acc + (x > y ? 3 : x===y ? 1 : 0), 0 ) // 0 merupakan nilai awal akumulator
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));

// cara 3
const point = (games) =>
  games.reduce((output, current) => {
    return (output +=
      current[0] > current[2] ? 3 : current[0] === current[2] ? 1 : 0);
  }, 0);
console.log( point(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));

// cara 4
// map
function points(games) {
  let result = 0;
  games.map((i) => {
    if (i[0] === i[2]) {
      result += 1;
    } else if (i[0] > i[2]) {
      result += 3;
    }
  });
  return result;
}
console.log( point(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));
