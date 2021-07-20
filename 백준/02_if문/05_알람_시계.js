function getDate() {
  const fs = require("fs");
  const timeArr = fs.readFileSync("/dev/stdin").toString().split(" ").map(value => {
    return Number(value);
  });

  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate(), timeArr[0], timeArr[1]);
}

function printFixedTimes() {
  const targetDate = getDate();
  const fixedDate = new Date(
    targetDate.getFullYear(), 
    targetDate.getMonth(), 
    targetDate.getDate(),
    targetDate.getHours(),
    targetDate.getMinutes() - 45);

  console.log(`${fixedDate.getHours()} ${fixedDate.getMinutes()}`);
}

printFixedTimes();