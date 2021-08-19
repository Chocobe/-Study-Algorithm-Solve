/**
 * @description
 *    * N개의 수가 주어졌을 때, 이를 오름차순으로 정렬하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const readline = require("readline");

let lineCount = 0;
const testCase = [];

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
    const sortedArr = countingSort(testCase);
    console.log(sortedArr.join("\n").trim());
  });

function initTestCase(line) {
  return Number(line.toString().trim());
}

function countingSort(arr) {
  const max = arr.reduce((max, value) => Math.max(max, value));
  const countingArr = Array.from({ length: max + 1 }, () => 0);

  arr.forEach(value => {
    countingArr[value]++;
  });

  for(let i = 0; i < countingArr.length; i++) {
    if(i === 0) continue;

    countingArr[i] += countingArr[i - 1];
  }

  const resultArr = Array.from({ length: arr.length }, () => -1);
  arr.forEach((value, idx) => {
    const sortedIdx = --countingArr[value];
    resultArr[sortedIdx] = value;
  });

  return resultArr;
}

const assert = require("assert");

describe("03_수_정렬하기_3", () => {
  const mockData1 = "10\n5\n2\n3\n1\n4\n2\n3\n5\n1\n7";
  const mockTestCase1 = [5, 2, 3, 1, 4, 2, 3, 5, 1, 7];
  const mockResult1 = [1, 1, 2, 2, 3, 3, 4, 5, 5, 7];
  
  it("initTestCase(mockData)", () => {
    const result = [];

    mockData1.split("\n").forEach((line, idx) => {
      if(idx > 0) {
        result.push(initTestCase(line));
      }
    });

    result.forEach((value, idx) => {
      assert(value === mockTestCase1[idx]);
    });
  });

  it("countingSort(mockTestCase1)", () => {
    const sortedArr = countingSort(mockTestCase1);

    sortedArr.forEach((value, idx) => {
      assert(value === mockResult1[idx]);
    });
  });
});