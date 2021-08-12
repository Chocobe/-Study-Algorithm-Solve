/**
 * @description
 *    * 재귀적인 패턴으로 별을 찍어 보자. N이 3의 거듭제곱(3, 9, 27, ...)이라고 할 때, 
 *      크기 N의 패턴은 N×N 정사각형 모양이다.
 * 
 *    * 크기 3의 패턴은 가운데에 공백이 있고, 가운데를 제외한 모든 칸에 별이 하나씩 있는 패턴이다.
 */

/*
***************************
* ** ** ** ** ** ** ** ** *
***************************
***   ******   ******   ***
* *   * ** *   * ** *   * *
***   ******   ******   ***
***************************
* ** ** ** ** ** ** ** ** *
***************************
*********         *********
* ** ** *         * ** ** *
*********         *********
***   ***         ***   ***
* *   * *         * *   * *
***   ***         ***   ***
*********         *********
* ** ** *         * ** ** *
*********         *********
***************************
* ** ** ** ** ** ** ** ** *
***************************
***   ******   ******   ***
* *   * ** *   * ** *   * *
***   ******   ******   ***
***************************
* ** ** ** ** ** ** ** ** *
***************************
*/

const fs = require("fs");
const readline = require("readline");

let testCase;

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

rl
  .on("line", line => {
    initData(line);
  })
  .on("close", () => {
    console.log(solution(testCase));
  })

function initData(line) {
  testCase = Number(line.toString().trim());
}

function solution(n) {
  const result = Array.from({ length: n }, () => Array.from({ length: n }, () => "*"));
  recursion(n, 0, 0);
  return result.map(row => row.join("")).join("\n");

  function recursion(size, startRow, startCol) {
    if(size < 3) return;
    
    const subSize = size / 3;
    const blankRowStart = startRow + subSize;
    const blankColStart = startCol + subSize;
    const blankRowLimit = startRow + subSize * 2;
    const blankColLimit = startCol + subSize * 2;

    // 공백처리
    for(let row = blankRowStart; row < blankRowLimit; row++) {
      for(let col = blankColStart; col < blankColLimit; col++) {
        result[row][col] = " ";
      }
    }

    // 세부요소 처리
    for(let row = 0; row < 3; row++) {
      for(let col = 0 ; col < 3; col++) {
        const nextRow = startRow + subSize * row;
        const nextCol = startCol + subSize * col;

        recursion(subSize, nextRow, nextCol);
      }
    }
  }
}

// const assert = require("assert");

// describe("03_별_찍기", () => {
//   const mock3 = [
//     "***",
//     "* *",
//     "***",
//   ].join("\n");

//   const mock9 = [
//     "*********",
//     "* ** ** *",
//     "*********",
//     "***   ***",
//     "* *   * *",
//     "***   ***",
//     "*********",
//     "* ** ** *",
//     "*********",
//   ].join("\n");

//   const mock27 = [
//     "***************************",
//     "* ** ** ** ** ** ** ** ** *",
//     "***************************",
//     "***   ******   ******   ***",
//     "* *   * ** *   * ** *   * *",
//     "***   ******   ******   ***",
//     "***************************",
//     "* ** ** ** ** ** ** ** ** *",
//     "***************************",
//     "*********         *********",
//     "* ** ** *         * ** ** *",
//     "*********         *********",
//     "***   ***         ***   ***",
//     "* *   * *         * *   * *",
//     "***   ***         ***   ***",
//     "*********         *********",
//     "* ** ** *         * ** ** *",
//     "*********         *********",
//     "***************************",
//     "* ** ** ** ** ** ** ** ** *",
//     "***************************",
//     "***   ******   ******   ***",
//     "* *   * ** *   * ** *   * *",
//     "***   ******   ******   ***",
//     "***************************",
//     "* ** ** ** ** ** ** ** ** *",
//     "***************************",
//   ].join("\n");

//   it("solution(3)", () => {
//     assert(solution(3) === mock3);
//   });

//   it("solution(9)", () => {
//     assert(solution(9) === mock9);
//   });

//   it("solution(27)", () => {
//     assert(solution(27) === mock27);
//   });
// });