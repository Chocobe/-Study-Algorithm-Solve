/**
 * @description
 *    * N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
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
    const sortedArr = sortASC(testCase);
    const result = sortedArr.join("\n");
    console.log(result.trim());
  });

function initTestCase(line) {
  return Number(line.toString().trim());
}

function sortASC(arr) {
  return [...arr].sort((lhs, rhs) => lhs > rhs ? 1 : -1);
}

const assert = require("assert");

describe("02_수_정렬하기_2", () => {
  const mockData1 = "5\n5\n4\n3\n2\n1";
  const mockTestCase1 = [5, 4, 3, 2, 1];  
  const mockResult1 = [1, 2, 3, 4, 5];

  it("initTestCase(mockData1)", () => {
    const result = [];
    let mockLineCount = 0;

    mockData1.split("\n").forEach(line => {
      mockLineCount++;

      if(mockLineCount > 1) {
        result.push(initTestCase(line));
      }
    });

    result.forEach((value, idx) => {
      assert(value === mockTestCase1[idx]);
    });
  });

  it("sortASC(mockTestCase1)", () => {
    const sortedArr = sortASC(mockTestCase1);

    sortedArr.forEach((value, idx) => {
      assert(value === mockResult1[idx]);
    });
  });
});