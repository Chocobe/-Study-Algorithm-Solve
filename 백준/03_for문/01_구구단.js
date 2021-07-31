// 백준 권한문제 - "readline"으로는 정상동작
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl
  .on('line', function (line) {
    input.push(Number(line));
  })
  .on('close', function () {
    printMulTable();
    process.exit();
});

function printMulTable() {
  for(let i = 1; i < 10; i++) {
    console.log(`${input} * ${i} = ${input * i}`);
  }
}