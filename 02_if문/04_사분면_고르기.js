// 백준 권한문제 - "readline"으로는 정상동작
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl
  .on('line', function (line) {
    input.push(Number(line))
  })
  .on('close', function () {
    if(input[0] > 0 && input[1] > 0) {
      console.log(1);
    } else if(input[0] < 0 && input[1] > 0) {
      console.log(2);
    } else if(input[0] < 0 && input[1] < 0) {
      console.log(3);
    } else {
      console.log(4);
    }
  process.exit();
});


// function getDimension() {
//   const fs = require("fs");
//   return fs.readFileSync("./dev/stdin").toString().split("\n").map(value => {
//     return Number(value);
//   });
// }

// function printQuadrant() {
//   const dimension = getDimension();

//   switch(dimension[0] > 0) {
//     case true: {
//       if(dimension[1] > 0) {
//         console.log(1);
//       } else {
//         console.log(4);
//       }

//       break;
//     }

//     case false: {
//       if(dimension[1] > 0) {
//         console.log(2);
//       } else {
//         console.log(3);
//       }
//     }
//   }
// }

// printQuadrant();