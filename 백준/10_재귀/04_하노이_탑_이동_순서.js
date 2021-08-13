/**
 * @description
 *    * 세 개의 장대가 있고 첫 번째 장대에는 반경이 서로 다른 n개의 원판이 쌓여 있다. 
 *      각 원판은 반경이 큰 순서대로 쌓여있다. 이제 수도승들이 다음 규칙에 따라 첫 번째 장대에서 세 번째 장대로 옮기려 한다.
 * 
 *    * 한 번에 한 개의 원판만을 다른 탑으로 옮길 수 있다.
 *    * 쌓아 놓은 원판은 항상 위의 것이 아래의 것보다 작아야 한다.
 *    * 이 작업을 수행하는데 필요한 이동 순서를 출력하는 프로그램을 작성하라. 
 *      (단, 이동 횟수는 최소가 되어야 한다.)
 */

// 블록번호: 홀수 => 3번 이동으로 시작
// 블록번호: 짝수 => 2번 이동으로 시작

const fs = require("fs");
const readline = require("readline");

let testCase;

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

rl
  .on("line", line => {
    initTestCase(line);
  })
  .on("close", () => {
    console.log(hanoi(testCase));
  });

function initTestCase(line) {
  testCase = Number(line.toString().trim());
}

function hanoi(n) {
  let history = [];
  recursion(n, 1, 3);
  return history.length.toString().concat("\n", history.join("\n"));
  
  function recursion(block, start, end) {
    if(block === 1) {
      history.push(`${start} ${end}`);
      return;
    }

    const mid = 6 - (start + end);
    recursion(block - 1, start, mid);
    history.push(`${start} ${end}`);
    recursion(block - 1, mid, end);
  }
}

// const assert = require("assert");

// describe("04_하노이_탑_이동_순서", () => {
//   const mock1 = "1\n1 3";
//   const mock2 = "3\n1 2\n1 3\n2 3";
//   const mock3 = "7\n1 3\n1 2\n3 2\n1 3\n2 1\n2 3\n1 3";
  
//   it("hanoi(1)", () => {
//     console.log(hanoi(1));
//     assert(hanoi(1) === mock1);
//   });

//   it("hanoi(2)", () => {
//     console.log(hanoi(2));
//     assert(hanoi(2) === mock2);
//   });

//   it("hanoi(3)", () => {
//     assert(hanoi(3) === mock3);
//   });
// });