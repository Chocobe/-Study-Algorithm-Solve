const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

let maxCount = 0;

rl
  .on("line", line => {
    parseData(line);
  })
  .on("close", () => {
    printStar();
  });

function parseData(line) {
  maxCount = Number(line);
}

function printStar() {
  let result = "";

  for(let i = 1; i <= maxCount; i++) {
    result = result.concat("\n");

    for(let j = 1; j <= i; j++) {
      result = result.concat("*");
    }
  }

  console.log(result.trim());
}