// https://www.codewars.com/kata/59ca8246d751df55cc00014c
function hero(bullets, dragons) {
  if (bullets/2 >= dragons) {
    return true
  }else{
    return false
  }
}
console.log(hero(10, 5));

// cara 2
// const hero = (bullets, dragon) => bullets/2>=dragon
// console.log(hero(10,5));
