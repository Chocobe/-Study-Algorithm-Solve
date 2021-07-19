function getInputData() {
  const fs = require("fs");
  return fs.readFileSync("/dev/stdin").toString().split(" ");
}

function compareValue() {
  const inputArr = getInputData();
  
  const lhs = Number(inputArr[0]);
  const rhs = Number(inputArr[1]);

  const result = lhs - rhs;

  if(result > 0) {
    console.log(">");
  } else if(result < 0) {
    console.log("<");
  } else {
    console.log("==");
  }
}

compareValue();