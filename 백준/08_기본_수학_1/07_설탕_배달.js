/**
 * @description
 *    * 상근이는 요즘 설탕공장에서 설탕을 배달하고 있다. 
 *      상근이는 지금 사탕가게에 설탕을 정확하게 N킬로그램을 배달해야 한다. 
 *      설탕공장에서 만드는 설탕은 봉지에 담겨져 있다. 봉지는 3킬로그램 봉지와 5킬로그램 봉지가 있다.
 * 
 *    * 상근이는 귀찮기 때문에, 최대한 적은 봉지를 들고 가려고 한다. 
 *    * 예를 들어, 18킬로그램 설탕을 배달해야 할 때, 3킬로그램 봉지 6개를 가져가도 되지만, 
 *      5킬로그램 3개와 3킬로그램 1개를 배달하면, 더 적은 개수의 봉지를 배달할 수 있다.
 * 
 *    * 상근이가 설탕을 정확하게 N킬로그램 배달해야 할 때, 봉지 몇 개를 가져가면 되는지 그 수를 구하는 프로그램을 작성하시오.
 */

const assert = require("assert");
const fs = require("fs");
const readline = require("readline");

const WEIGHT_5 = 5;
const WEIGHT_3 = 3;

let testCase;

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

rl
  .on("line", line => {
    testCase = initTestCase(line);
  })
  .on("close", () => {
    console.log(solution(testCase));
  });

function initTestCase(line) {
  return Number(line.toString().trim());
}

function solution(totalWeight) {
  let count5 = Math.floor(totalWeight / WEIGHT_5);
  let remainWeight = totalWeight % WEIGHT_5;
  let count3 = remainWeight / WEIGHT_3;

  if(count3 === Math.floor(count3)) {
    return count5 + count3;
  } else {
    return recursiveCalc();
  }

  function recursiveCalc() {
    if(count5 < 1) {
      return -1;
    }
    
    count5--;
    remainWeight += WEIGHT_5;

    count3 = remainWeight / WEIGHT_3;

    if(count3 === Math.floor(count3)) {
      return count3 + count5;
    } else {
      return recursiveCalc();
    }
  }
}

describe("07_설탕_배달.js", () => {
  it("initTestCase()", () => {
    assert(initTestCase("18") === 18);
    assert(initTestCase("18 ") === 18);
    assert(initTestCase(" 18") === 18);
    assert(initTestCase(" 18 ") === 18);
  });

  it("solution(18)", () => {
    assert(solution(18) === 4);
  });

  it("solution(4)", () => {
    assert(solution(4) === -1);
  });

  it("solution(6)", () => {
    assert(solution(6) === 2);
  });
});