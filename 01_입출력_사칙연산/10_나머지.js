const fs = require("fs");

function calculator(a, b, c) {
  calc01(a, b, c);
  calc02(a, b, c);
  calc03(a, b, c);
  calc04(a, b, c);
  
  function calc01(a, b, c) {
    console.log((a + b) % c);
  }

  function calc02(a, b, c) {
    console.log(((a % c) + (b % c)) % c);
  }

  function calc03(a, b, c) {
    console.log((a * b) % c);
  }

  function calc04(a, b, c) {
    console.log(((a % c) * (b % c)) % c);
  }
}

const input = fs.readFileSync("/dev/stdin").toString().split(" ");

const a = Number(input[0]);
const b = Number(input[1]);
const c = Number(input[2]);

calculator(a, b, c);