/**
 * @description
 *    * 어떤 자연수 N이 있을 때, 그 자연수 N의 분해합은 N과 N을 이루는 각 자리수의 합을 의미한다. 
 *    * 어떤 자연수 M의 분해합이 N인 경우, M을 N의 생성자라 한다. 
 *    * 예를 들어, 245의 분해합은 256(=245+2+4+5)이 된다. 
 *      따라서 245는 256의 생성자가 된다. 
 *      물론, 어떤 자연수의 경우에는 생성자가 없을 수도 있다. 반대로, 생성자가 여러 개인 자연수도 있을 수 있다.
 * 
 *    * 자연수 N이 주어졌을 때, N의 가장 작은 생성자를 구해내는 프로그램을 작성하시오.
 */

const fs = require("fs");
const readline = require("readline");

let testCase = 0;

readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
})
  .on("line", line => {
    testCase = initTestCase(line);
  })
  .on("close", () => {
    console.log(calcDecomposition(testCase));
  });

function initTestCase(line) {
  return Number(line.toString().trim());
}

function calcDecomposition(testCase) {
  for(let i = 0; i < testCase; i++) {
    let decomposition = i;

    decomposition += String(i)
      .split("")
      .map(value => Number(value))
      .reduce((total, digit) => total + digit, 0);

    if(decomposition === testCase) {
      return i;
    }
  }

  return 0;
}

const assert = require("assert");

describe("02_분해합", () => {
  const mockLine1 = "216";
  
  it("initTestCase()", () => {
    assert(216 === initTestCase(mockLine1));
  });

  it("calcDecomposition() === 198", () => {
    assert(calcDecomposition(216) === 198);
  });

  it("calcDecomposition() === 15", () => {
    assert(calcDecomposition(15) === 12);
  });
});