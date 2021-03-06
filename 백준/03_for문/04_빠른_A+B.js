const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

let digitCount = 0;
let dataArr = [];

rl
  .on("line", line => {
    parseData(line);
  })
  .on("close", () => {
    printSum();
  });

function parseData(line) {
  const digitArr = line.toString().split(" ");

  if(digitArr.length === 1) {
    digitCount = Number(digitArr[0]);
  } else if(digitArr.length > 1) {
    const parsedDigitArr = digitArr.map(digit => {
      return Number(digit);
    });

    dataArr.push(parsedDigitArr);
  }
}

function printSum() {
  let result = "";

  dataArr.forEach(arr => {
    result = result.concat("\n", arr.reduce((total, curValue) => {
      return total + curValue;
    }));
  });

  console.log(result.trim());
}