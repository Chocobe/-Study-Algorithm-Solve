/**
 * @description
 *    * 피보나치 수는 0과 1로 시작한다. 
 *      0번째 피보나치 수는 0이고, 1번째 피보나치 수는 1이다. 그 다음 2번째 부터는 바로 앞 두 피보나치 수의 합이 된다.
 *      이를 식으로 써보면 Fn = Fn-1 + Fn-2 (n ≥ 2)가 된다.
 * 
 *    * n=17일때 까지 피보나치 수를 써보면 다음과 같다.
 *      0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597
 * 
 *    * n이 주어졌을 때, n번째 피보나치 수를 구하는 프로그램을 작성하시오.
 */

// 01. 파일 읽기
// 02. 피보나치 계산 함수
//    02-01. 피보나치 재귀 함수

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

let data;

function initData(line) {
  return Number(line.toString().trim());
}

function calcFibonacci(num) {
  if(num === 0) return 0;
  if(num === 1) return 1;

  return recursionFibonacci(0, 1, 2);

  function recursionFibonacci(lhs, rhs, idx) {
    if(idx === num) return lhs + rhs;
    return recursionFibonacci(rhs, lhs + rhs, ++idx);
  }
}

rl
  .on("line", line => {
    data = initData(line);
  })
  .on("close", () => {
    console.log(calcFibonacci(data));
  });

const assert = require("assert");

describe("02_피보나치_수_5", () => {
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

  it("calcFibonacci(1)", () => {
    assert(calcFibonacci(0) === 0);
  });

  it("calcFibonacci(2)", () => {
    assert(calcFibonacci(1) === 1);
  });

  it("calcFibonacci(3)", () => {
    assert(calcFibonacci(2) === 1);
  });

  it("calcFibonacci(10)", () => {
    assert(calcFibonacci(10) === 55);
  });
});