// https://www.codewars.com/kata/55cbd4ba903825f7970000f5/train/javascript
function getGrade(s1, s2, s3) {
    score = (s1+s2+s3)/3
    if (score < 60) return 'F' 
    if (score < 70) return 'D' 
    if (score < 80) return 'C' 
    if (score < 90) return 'B'
    return 'A' 
}
console.log(getGrade(60,60,60));

// cara 2
// reduce 
 getGrade = (...s) => {
  score = s.reduce((acc, curr) => acc + curr) / s.length;
  if (score < 60) return "F";
  if (score < 70) return "D";
  if (score < 80) return "C";
  if (score < 90) return "B";
  return "A";
}
console.log(getGrade(80,70,60,100,80,90));

(function(name){
    console.log(`hai ${name} !`);
})('rida')

// (a = (name) => console.log(`hai ${name} !`))('');
