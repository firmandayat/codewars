// https://www.codewars.com/kata/577a98a6ae28071780000989/train/javascript
min = (list) => {
  let minVal = list[0]; // Inisialisasi dengan elemen pertama dari list
  for (let i = 1; i < list.length; i++) { // Mulai dari i = 1, karena list[0] sudah jadi minVal awal
    if (list[i] < minVal) {
      minVal = list[i]; // Update minVal jika ada nilai yang lebih kecil
    }
  }
  return minVal;
};
console.log(min([-52, 56, 30, 29, -54, 0, -110]));

// cara 2
// const min = list => Math.min(...list)
// console.log(min([-52, 56, 30, 29, -54, 0, -110]));

// cara 3
// const min = (list) => list.sort((a, b) => a - b)[0];
// console.log(min([-52, 56, 30, 29, -54, 0, -110]));

// cara 4
const max = (list) => list.sort((a, b) => b - a)[0];
console.log(max([-52, 56, 30, 29, -54, 0, -110]));

// cara 5
// map
minimal = min => {
  let minimum = min[0]
  min.map((i)=>{
    min[i]<minimum
    minimum += min[i]
  })
  return minimum
}
console.log(max([-52, 56, 30, 29, -54, 0, -110]));
console.log(min([-52, 56, 30, 29, -54, 0, -110]));
