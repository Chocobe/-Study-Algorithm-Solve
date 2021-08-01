const fs = require("fs");

function readFile() {
  return fs.readFileSync("./dev/stdin").toString();
}

function printDigit(num) {
  let result = "";

  for(let i = 1; i <= num; i++) {
    result = result.concat("\n", Number(i));
  }

  console.log(result.trim());
}

printDigit(readFile());