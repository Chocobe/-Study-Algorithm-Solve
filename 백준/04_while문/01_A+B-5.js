/**
 * @description:
 *    * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

const dataArr = [];

rl
  .on("line", line => {
    parseData(line);
  })
  .on("close", () => {
    printAllSum(dataArr);
  });

function parseData(line) {
  const curData = line.trim().split(" ").map(digit => Number(digit));

  if(curData[0] === 0 && curData[1] === 0) {
    return;
  }

  dataArr.push(curData);
}

function printAllSum(dataArr) {
  let result = "";
  
  while(dataArr.length > 0) {
    const curArr = dataArr.shift();
    result = result.concat("\n", sum(curArr));
  }

  console.log(result.trim());

  function sum(arr) {
    return arr.reduce((total, digit) => total + digit);
  }
}