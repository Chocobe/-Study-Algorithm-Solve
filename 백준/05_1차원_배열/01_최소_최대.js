/**
 * @description:
 *    * N개의 정수가 주어진다. 이때, 최솟값과 최댓값을 구하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const readline = require("readline");

let dataArr = [];
let min = Number.MAX_SAFE_INTEGER;
let max = Number.MIN_SAFE_INTEGER;
let lineCount = 0;

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

rl
  .on("line", line => {
    lineCount++;

    if(lineCount > 1) {
      initData(line);
    }
  })
  .on("close", () => {
    setMinMax();
    printMinMax();
  });

function initData(line) {
  dataArr = line.trim().split(" ").map(value => Number(value));
}

function setMinMax() {
  dataArr.forEach(value => {
    min = Math.min(min, value);
    max = Math.max(max, value);
  });
}

function printMinMax() {
  console.log(`${min} ${max}`);
}