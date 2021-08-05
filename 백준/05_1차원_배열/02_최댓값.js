/**
 * @description:
 *    * 9개의 서로 다른 자연수가 주어질 때, 이들 중 최댓값을 찾고 그 최댓값이 몇 번째 수인지를 구하는 프로그램을 작성하시오.
 *    * 예를 들어, 서로 다른 9개의 자연수
 *    * 3, 29, 38, 12, 57, 74, 40, 85, 61
 *    * 이 주어지면, 이들 중 최댓값은 85이고, 이 값은 8번째 수이다.
 */

const fs = require("fs");
const readline = require("readline");

let dataArr = [];
let max = Number.MIN_SAFE_INTEGER;
let index = -1;

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

rl
  .on("line", line => {
    initData(line);
  })
  .on("close", () => {
    pickMax();
    printResult();
  });

function initData(line) {
  dataArr.push(Number(line.trim()));
}

function pickMax() {
  dataArr.forEach((value, idx) => {
    if(value > max) {
      max = value;
      index = idx;
    }
  });
}

function printResult() {
  let result = max.toString().concat("\n", index + 1);
  console.log(result);
}