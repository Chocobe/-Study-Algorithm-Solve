/**
 * @description:
 *    * "OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 
 *    * 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.
 *    * "OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.
 *    * OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const readline = require("readline");

let lineCount = 0;
let curScore = 0;
const answerSheetArr = [];
const scoreArr = [];

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

rl
  .on("line", line => {
    lineCount++;

    if(lineCount > 1) {
      initData(line);
    }
  })
  .on("close", () => {
    answerSheetArr.forEach((answerSheet, index) => {
      curScore = 0;
      calcScore(answerSheet, index);
    });

    printScore();
  });

function initData(line) {
  answerSheetArr.push(line.trim());
}

function calcScore(answerSheet, index) {
  let totalScore = 0;
  
  answerSheet.split("").forEach(state => {
    if(state === "O") {
      curScore++;
    } else {
      curScore = 0;
    }

    totalScore += curScore;
  });

  scoreArr[index] = totalScore;
}

function printScore() {
  let result = "";

  scoreArr.forEach(score => {
    result = result.concat("\n", score.toString());
  });

  console.log(result.trim());
}