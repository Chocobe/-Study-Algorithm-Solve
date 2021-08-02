const fs = require("fs");
const readline = require("readline");

const CONTENT_HEAD = "Case #";
const dataArr = [];
let dataCount = 0;

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

rl
  .on("line", line => {
    parseData(line);
  })
  .on("close", () => {
    printData();
  })

function parseData(line) {
  const parsedArr = line.toString().split(" ");

  if(parsedArr.length === 1) {
    dataCount = Number(parsedArr[0]);
  } else if(parsedArr.length > 1) {
    dataArr.push(
      parsedArr.map(digit => {
        return Number(digit);
      })
    )
  }
}

function printData() {
  let result = "";

  dataArr.forEach((arr, index) => {
    result = result.concat(
      "\n",
      createPrintForm(arr, index),
    );
  });

  console.log(result.trim());
}

function createPrintForm(arr, index) {
  const sum = arr.reduce((total, digit) => {
    return total + digit;
  });

  return CONTENT_HEAD.concat(
    `${index + 1}: `,
    arr[0],
    " + ",
    arr[1],
    " = ",
    sum
  )
}