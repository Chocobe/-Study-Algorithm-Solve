const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let count = 0;
const digitPairList = [];

rl
  .on("line", (line) => {
    const arr = line.toString().trim().split(" ");

    if(arr.length === 1) {
      count = Number(arr[0]);
    } else {
      digitPairList.push({ 
        a: Number(arr[0]),
        b: Number(arr[1])
      });
    }
  })
  .on("close", () => {
    printAll(digitPairList);
    process.exit();
  });

function printAll(arr) {
  arr.forEach(({a, b}) => {
    printSum(a, b);
  });

  function printSum(a, b) {
    console.log(a + b);
  }
}