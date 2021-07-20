// 백준에서 문제의 입력값은 파일을 읽어서 처리해야 한다.
// 경로: "/dev/stdin"

const fs = require("fs");

const input = fs.readFileSync("./05_input.txt").toString().split(" ");
const a = Number(input[0]);
const b = Number(input[1]);

console.log(a + b);