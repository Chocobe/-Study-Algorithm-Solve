function getScore() {
  const fs = require("fs");
  return Number(fs.readFileSync("/dev/stdin"));
}

function calcGrade() {
  const score = getScore();

  if(score > 89) {
    console.log("A");
  } else if(score > 79) {
    console.log("B");
  } else if(score > 69) {
    console.log("C");
  } else if(score > 59) {
    console.log("D");
  } else {
    console.log("F");
  }
}

calcGrade();