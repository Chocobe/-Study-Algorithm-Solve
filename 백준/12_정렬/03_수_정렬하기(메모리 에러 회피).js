const fs = require("fs");
const readline = require("readline");

let lineCount = 0;
let testCase = "";

readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
})
  .on("line", line => {
    lineCount++;

    if(lineCount > 1) {
      testCase = testCase.concat(line.toString().trim());
    }
  })
  .on("close", () => {
    for(let i = testCase.length - 2; i >= 0; i--) {
      for(let j = 0; j <= i; j++) {
        if(Number(testCase[j]) > Number(testCase[j + 1])) {
          const temp = testCase[j];
          testCase = [testCase.slice(0, j), testCase[j + 1], testCase.slice(j + 1, testCase.length)].join("");
          testCase = [testCase.slice(0, j + 1), temp, testCase.slice(j + 2, testCase.length)].join("");
        }
      }
    }

    console.log(testCase.split("").join("\n"));
  });