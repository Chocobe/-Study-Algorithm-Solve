const fs = require("fs");
const readline = require("readline");

let lineNum = 0;
let maxDigit = 0;
const dataArr = [];
const answerArr = [];

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

rl
  .on("line", line => {
    parseData(line);
  })
  .on("close", () => {
    pickSmallerDigit();
    printAnswer();
  })

function parseData(line) {
  const digitArr = line.toString().split(" ");

  if(lineNum === 0) {
    maxDigit = Number(digitArr[1]);
    lineNum++;
  } else {
    dataArr.push(...digitArr.map(digit => {
      return Number(digit);
    }));
  }
}

function pickSmallerDigit() {
  dataArr.forEach(digit => {
    if(digit < maxDigit) {
      answerArr.push(digit);
    }
  })
}

function printAnswer() {
  let result = answerArr.reduce((content, digit) => {
    return content.concat(" ", digit);
  }, "");
  
  console.log(result.trim());
}
