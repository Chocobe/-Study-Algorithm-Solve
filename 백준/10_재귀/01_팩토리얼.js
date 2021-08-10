/**
 * @description
 *    * 0보다 크거나 같은 정수 N이 주어진다. 이때, N!을 출력하는 프로그램을 작성하시오.
 */

// 01. 파일 읽기
// 02. 팩토리얼 함수 구현
//    02-01. 곱하기 (내부함수 - 재귀함수)

const fs = require("fs");
const readline = require("readline");

const rl = readline .createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

let data;

function initData(line) {
  return Number(line.toString().trim());
}

function calcFactorial(num) {
  return recursionFunc(num);

  function recursionFunc(num) {
    if(num <= 1) return 1;
    return num * recursionFunc(num - 1);
  }
}

rl
  .on("line", line => {
    data = initData(line);
  })
  .on("close", () => {
    console.log(calcFactorial(data));
  });

const assert = require("assert");

describe("01_팩토리얼", () => {
  let mockData;

  before(() => {
    mockData = Number(fs.readFileSync("./dev/stdin").toString().trim());
  });
  
  it("initData()", () => {
    let line;

    readline.createInterface({
      input: fs.createReadStream("./dev/stdin"),
      output: undefined,
    })
      .on("line", fileLine => {
        line = fileLine;
      })
      .on("close", () => {
        assert(initData(line) === mockData);
      });
  });

  it("calcFactorial(3)", () => {
    assert(calcFactorial(3) === 6);
  });

  it("calcFactorial(4)", () => {
    assert(calcFactorial(4) === 24);
  });

  it("calcFactorial(10)", () => {
    assert(calcFactorial(10) === 3_628_800);
  })
});