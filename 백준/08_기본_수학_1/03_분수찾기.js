/**
 * @description
 *    * 무한히 큰 배열에 다음과 같이 분수들이 적혀있다.
 *    * 이와 같이 나열된 분수들을 1/1 -> 1/2 -> 2/1 -> 3/1 -> 2/2 -> … 과 같은 
 *      지그재그 순서로 차례대로 1번, 2번, 3번, 4번, 5번, … 분수라고 하자.
 * 
 *    * X가 주어졌을 때, X번째 분수를 구하는 프로그램을 작성하시오.
 */

// 14
// 1 + 2 + 3 + 4 보다 크거나 같고, (10)
// 1 + 2 + 3 + 4 + 5 보다 작거나 같다. (15)

// 기준값: 5 (홀수)
// 14 - 10 => 4
// 홀수 => 5/1 - 4/2 - 3/3 - 2/4 - 1/5

const fs = require("fs");
const readline = require("readline");

let data;

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

rl
  .on("line", line => {
    initData(line);
  })
  .on("close", () => {
    solution();
  });

function initData(line) {
  data = Number(line.trim());
}

function solution() {
  let distance = 0;
  let curMaxPosition = 0;

  while(curMaxPosition < data) {
    next();
  }

  printCurValue();

  function next() {
    distance++;
    curMaxPosition = distance * (distance + 1) / 2;
  }

  function printCurValue() {
    let startCol = 0;
    let startRow = 0;
    let diff = curMaxPosition - data;

    if(distance % 2 === 0) {
      startCol = distance - diff;
      startRow = 1 + diff;
    } else {
      startCol = 1 + diff;
      startRow = distance - diff;
    }

    console.log(`${startCol}/${startRow}`);
  }
}