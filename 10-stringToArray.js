// https://www.codewars.com/kata/57e76bc428d6fbc2d500036d/train/javascript
function stringToArray(string) {
 return string.split(' ');
}
console.log(stringToArray("Robin Singh"));

// cara 2
stringToArray = _ => _.split(' ')
console.log(stringToArray("Robin Singh"));
