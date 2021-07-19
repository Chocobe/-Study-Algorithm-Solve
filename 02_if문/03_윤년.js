function getYear() {
  const fs = require("fs");
  return Number(fs.readFileSync("/dev/stdin"));
}

function isLeapYear() {
  const year = getYear();

  console.log(
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0 ? 1 : 0
  );
}

isLeapYear();