// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript
// cara 1
const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (distanceToPump/mpg <= fuelLeft) {
    return true
  }else{
    return false
  }
};
console.log(zeroFuel(50, 25, 1));

// cara 2
// arrow function one liner
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => distanceToPump/mpg <= fuelLeft
// console.log(zeroFuel(50, 25, 2));

// cara 3
// ternary 
// const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
//     return (distanceToPump/mpg <= fuelLeft) ? true : false
// };
// console.log(zeroFuel(50, 25, 1));

// cara 4
// cara unik menggunakan variabel underscore
// const zeroFuel = (_, __, ___) => _/__ <= ___
// console.log(zeroFuel(50, 25, 4));