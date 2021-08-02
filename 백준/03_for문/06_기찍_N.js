const fs = require("fs");
const readline = require("readline");

let max = 0;

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

rl
  .on("line", line => {
    max = Number(line);
  })
  .on("close", () => {
    printAnswer(max);
  })

function printAnswer(max) {
  let result = "";
  
  for(let i = max; i > 0; i--) {
    result = result.concat("\n", i);
  }

  console.log(result.trim());
}
