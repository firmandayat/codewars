// https://www.codewars.com/kata/5a2be17aee1aaefe2a000151/train/javascript
function arrayPlusArray(arr1, arr2) {
  let result = 0;
  for (let i = 0; i < arr1.length; i++) {
    result += arr1[i];
  }
  for (let i = 0; i < arr2.length; i++) {
    result += arr2[i];
  }
  return result;
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// cara 2
// reduce
arrayPlusArray = (arr1, arr2) =>
  arr1.reduce((acc, curr) => acc + curr) +
  arr2.reduce((acc, curr) => acc + curr)
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// cara 3
arrayPlusArray = (arr1, arr2) => [...arr1, ...arr2].reduce((acc, curr) => acc + curr)
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// cara 4
// concat
arrayPlusArray = (arr1, arr2) =>
  arr1.concat(arr2).reduce((acc, curr) => acc + curr) 
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));

// cara 5
// map
function plus(a, b){
  result = 0
  a.concat(b).map((i)=>{
    result += a[i]
  })
  return result
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6]));
