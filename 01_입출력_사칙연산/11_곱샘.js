const fs = require("fs");

function mulProcess(a, b) {
  return String(b).split("").map(digit => {
    return a * Number(digit);
  });
}

function print(results) {
  for(let i = results.length - 1; i >= 0; i--) {
    console.log(results[i]);
  }
}

function mulResult(results) {
  return results.reduce((result, value, idx) => {
    const digit = Math.pow(10, results.length - (idx + 1));

    return result + (value * digit);
  }, 0);
}

const input = fs.readFileSync("/dev/stdin").toString().split("\n");
const a = Number(input[0]);
const b = Number(input[1]);

const results = mulProcess(a, b);
const mul = mulResult(results);

print(results);
console.log(mul);