const fs = require("fs");

function calculator(a, b) {
  sum(a, b);
  sub(a, b);
  mul(a, b);
  div(a, b);
  mod(a, b);
  
  function sum(a, b) {
    console.log(a + b);
  }

  function sub(a, b) {
    console.log(a - b);
  }

  function mul(a, b) {
    console.log(a * b);
  }

  function div(a, b) {
    console.log(Math.floor(a / b));
  }

  function mod(a, b) {
    console.log(a % b);
  }
}

const input = fs.readFileSync("/dev/stdin").toString().split(" ");
const a = Number(input[0]);
const b = Number(input[1]);

calculator(a, b);