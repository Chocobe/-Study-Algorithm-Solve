const fs = require("fs");
const readline = require("readline");

let maxCount = 0;

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

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

  for(let starCount = 1; starCount <= maxCount; starCount++) {
    result = result.concat("\n");
    
    for(let col = 1; col <= maxCount; col++) {
      if(col <= (maxCount - starCount)) {
        result = result.concat(" ");
      } else {
        result = result.concat("*");
      }
    }
  }

  console.log(result.replace(/^\n/, ""));
}