/**
 * @description:
 *    * N개의 숫자가 공백 없이 쓰여있다. 이 숫자를 모두 합해서 출력하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

let lineCount = 0;
let digitArr = [];

rl
  .on("line", line => {
    lineCount++;

    if(lineCount ===  2) {
      initData(line);
    }
  })
  .on("close", () => {
    printSum();
  })

function initData(line) {
  digitArr = line.trim().split("").map(value => Number(value));
}

function printSum() {
  const total = digitArr.reduce((total, digit) => total + digit);
  console.log(total);
}