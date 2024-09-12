// https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
const rps = (p1, p2) => {
  if (p1 === p2) {
    return "Draw!";
  } else if (
    (p1 === "scissors" && p2 === "paper") ||
    (p1 === "rock" && p2 === "scissors") ||
    (p1 === "paper" && p2 === "rock")
  ) {
    return "Player 1 won!";
  } else {
    return "Player 2 won!";
  }
};
console.log(rps("scissors", "paper"));

// cara 2
// ternary operator
rps = (p1, p2) =>
    p1 === p2 ? "Draw!" :
        (p1 === "scissors" && p2 === "paper") ||
        (p1 === "rock" && p2 === "scissors") ||
        (p1 === "paper" && p2 === "rock") ? "Player 1 won!" : "Player 2 won!"

console.log(rps("scissors", "paper"));

// cara 3
// object
rps = (p1, p2) => {
  const rules = {
    scissors: "paper",
    rock: "scissors",
    paper: "rock",
  };
  return p1 === p2 ? "Draw!" : `Player ${rules[p1] === p2 ? 1 : 2} won!`;
};
//   if (p1 === p2) {
//     return "Draw!";
//   } else {
//     return `Player ${rules[p1] === p2 ? 1 : 2} won!`; // Jika pilihan Player 2 (p2) sama dengan nilai/value yang ada di rules[p1], maka Player 1 menang.
//   }

console.log(rps("scissors", "paper"));
