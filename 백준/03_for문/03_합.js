const fs = require("fs");
const readline = require("readline");

const reader = readline.createInterface({
  input: fs.createReadStream("./dev/stdio"),
  output: undefined,
});

reader
  .on("line", line => {
    const digit = Number(line);
    calcPermutation(digit);
  })
  .on("close", () => {
    // console.log("끝~");
  });

function calcPermutation(max) {
  console.log(max * (max + 1) / 2);
}