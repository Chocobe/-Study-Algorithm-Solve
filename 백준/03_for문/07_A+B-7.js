const fs = require("fs");
const readline = require("readline");

const CONTENT_HEAD = "Case #";
const dataArr = [];
let digitCount = 0;

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

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
    const parsedArr = digitArr.map(digit => {
      return Number(digit);
    });

    dataArr.push(parsedArr);
  }
}

function printSum() {
  let result = "";

  for(let i = 0; i < dataArr.length; i++) {
    const sum = dataArr[i].reduce((total, digit) => {
      return total + digit;
    }, 0);

    result = result.concat(
      "\n", 
      `${CONTENT_HEAD}${i + 1}: `, 
      sum
    );
  }

  console.log(result.trim());
}