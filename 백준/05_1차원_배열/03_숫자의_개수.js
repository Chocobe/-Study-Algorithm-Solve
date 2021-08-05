/**
 * @description:
 *    * 세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에
 *      0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.
 * 
 *    * 예를 들어 A = 150, B = 266, C = 427 이라면 A × B × C = 150 × 266 × 427 = 17037300 이 되고, 
 *      계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.
 */

const fs = require("fs");
const readline = require("readline");

const dataArr = [];
const resultArr = Array.from({ length: 10 }, () => 0);

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

rl
  .on("line", line => {
    initData(line);
  })
  .on("close", () => {
    const result = mul();
    countDigits(result);
    printCounts();
  });

function initData(line) {
  dataArr.push(Number(line.trim()));
}

function mul() {
  return dataArr.reduce((total, value) => total * value, 1);
}

function countDigits(value) {
  const digitArr = value.toString().split("");

  digitArr.forEach(digit => {
    resultArr[Number(digit)]++;
  });
}

function printCounts() {
  let result = "";

  resultArr.forEach(value => {
    result = result.concat("\n", value.toString());
  });

  console.log(result.trim());
}