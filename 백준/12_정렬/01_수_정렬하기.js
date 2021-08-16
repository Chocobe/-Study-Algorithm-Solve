/**
 * @description
 *    * N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
 * 
 *    * (버블정렬로 풀었습니다)
 */

const fs = require("fs");
const readline = require("readline");

let lineCount = 0;
let testCase = [];

readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
})
  .on("line", line => {
    lineCount++;

    if(lineCount > 1) {
      testCase.push(initTestCase(line));
    }
  })
  .on("close", () => {
    console.log(sortASC(testCase)
      .map(value => value.toString())
      .join("\n")
    );
  });

function initTestCase(line) {
  return Number(line.toString().trim());
}

function sortASC(arr) {
  const result = [...arr];

  for(let i = 1; i < arr.length; i++) {
    const limit = arr.length - i;

    for(let j = 0; j < limit; j++) {
      if(result[j] > result[j + 1]) {
        [result[j], result[j + 1]] = [result[j + 1], result[j]];
      }
    }
  }

  return result;
}

// const assert = require("assert");

// describe("01_수_정렬하기", () => {
//   const mockData1 = "5\n5\n2\n3\n4\n9\n1";
//   const mockTestCase1 = [5, 2, 3, 4, 9, 1];
//   const mockResult1 = [1, 2, 3, 4, 5, 9];

//   const mockTestCase2 = [33, 21, 11, 100, 95];
//   const mockResult2 = [11, 21, 33, 95, 100];

//   it("initTestCase()", () => {
//     const result = [];

//     mockData1.split("\n").forEach((line, idx) => {
//       if(idx === 0) return;

//       result.push(initTestCase(line));
//     });

//     result.forEach((value, idx) => {
//       assert(value === mockTestCase1[idx]);
//     });
//   });

//   it("sortASC(mockTestCase1)", () => {
//     const sortedArr = sortASC(mockTestCase1);

//     sortedArr.forEach((value, idx) => {
//       assert(value === mockResult1[idx]);
//     });
//   });

//   it("sortASC(mockTestCase2)", () => {
//     const sortedArr = sortASC(mockTestCase2);

//     sortedArr.forEach((value, idx) => {
//       assert(value === mockResult2[idx]);
//     });
//   });
// });