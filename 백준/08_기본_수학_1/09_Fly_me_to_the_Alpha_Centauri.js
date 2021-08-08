/**
 * @description
 *    * 우현이는 어린 시절, 지구 외의 다른 행성에서도 인류들이 살아갈 수 있는 미래가 오리라 믿었다. 
 *      그리고 그가 지구라는 세상에 발을 내려 놓은 지 23년이 지난 지금, 
 *      세계 최연소 ASNA 우주 비행사가 되어 새로운 세계에 발을 내려 놓는 영광의 순간을 기다리고 있다.
 * 
 *    * 그가 탑승하게 될 우주선은 Alpha Centauri라는 새로운 인류의 보금자리를 개척하기 위한 
 *      대규모 생활 유지 시스템을 탑재하고 있기 때문에, 그 크기와 질량이 엄청난 이유로 
 *      최신기술력을 총 동원하여 개발한 공간이동 장치를 탑재하였다. 
 *    * 하지만 이 공간이동 장치는 이동 거리를 급격하게 늘릴 경우 기계에 심각한 결함이 발생하는 단점이 있어서, 
 *      이전 작동시기에 k광년을 이동하였을 때는 k-1 , k 혹은 k+1 광년만을 다시 이동할 수 있다. 
 * 
 *    * 예를 들어, 이 장치를 처음 작동시킬 경우 -1 , 0 , 1 광년을 이론상 이동할 수 있으나 
 *      사실상 음수 혹은 0 거리만큼의 이동은 의미가 없으므로 1 광년을 이동할 수 있으며, 
 *      그 다음에는 0 , 1 , 2 광년을 이동할 수 있는 것이다. 
 *      ( 여기서 다시 2광년을 이동한다면 다음 시기엔 1, 2, 3 광년을 이동할 수 있다. )
 * 
 *    * 김우현은 공간이동 장치 작동시의 에너지 소모가 크다는 점을 잘 알고 있기 때문에 
 *      x지점에서 y지점을 향해 최소한의 작동 횟수로 이동하려 한다. 
 * 
 *    * 하지만 y지점에 도착해서도 공간 이동장치의 안전성을 위하여 
 *      y지점에 도착하기 바로 직전의 이동거리는 반드시 1광년으로 하려 한다.
 * 
 *    * 김우현을 위해 x지점부터 정확히 y지점으로 이동하는데 필요한 공간 이동 장치 작동 횟수의 
 *      최솟값을 구하는 프로그램을 작성하라.
 */

// ---
// 규칙 찾기
// ---
// "최대 이동거리"를 기준으로, 이동횟수의 경계를 찾을 수 있다. ("최대 이동거리": n)
// n: 1 => (1 * 2 - 1) => 1회 (총 이동거리: 1^2: 1)
// n: 2 => (2 * 2 - 1) => 3회 (총 이동거리: 2^2: 4)
// n: 3 => (3 * 2 - 1) => 5회 (총 이동거리: 3^2: 9)
// n: 4 => (4 * 2 - 1) => 7회 (총 이동거리: 4^2: 16)
// n: 5 => (5 * 2 - 1) => 9회 (총 이동거리: 5^2: 25)

// "총 이동거리"가 중간값일 경우, 이동횟수 보정 ("총 이동거리": k)
// k: 2 일 때,
// n: 1 (k: 1) 보다 크다.
// n: 2 (k: 4) 보다 작다.
//
// Math.floor((4 - 1) / 2) 값(1)을 단위로 횟수 보정 ("보정값": b)
// "k: 2" >= 2^2 - (b * 1)
//    2 >= 4 - 1: false
// "k: 2" >= 2^ 2 - (b * 2)
//    2 >= 4 - 2: true
//
// "보정값": b에 곱해진 값만큼(i), "n: 2"의 횟수에서 뺀 값이, "k: 2"의 이동횟수
// "n: 2"의 이동횟수: (2 * 2 - 1) 에서 "i - 1"값을 빼면, 보정완료
// 3 - 2 = 1회

// 공식 정리
// 1. "최대 이동거리"를 사용하여, 이동할 거리가 포함될 범위 추출 (2^2 < 5 < 3^2) => 기준 "최대 이동거리": "n: 3"
// 2. "보정값"에 곱해진 i를 추출
// 3. 기준 "최대 이동거리" 에 대한 "이동횟수"에서 (i - 1)을 뺀 값이 "이동횟수" 결과

const fs = require("fs");
const readline = require("readline");

let lineCount = 0;
let testCase;

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

rl
  .on("line", line => {
    lineCount++;

    if(lineCount === 1) {
      testCase = [];
    } else {
      initTestCase(line);
    }
  })
  .on("close", () => {
    testCase.forEach(curCase => {
      console.log(solution(curCase));
    });
  });

function initTestCase(line) {
  testCase.push(line.toString().trim().split(" ").reduce((obj, value, idx) => {
    if(idx === 0) {
      obj["start"] = Number(value);
    } else {
      obj["end"] = Number(value);
    }

    return obj;
  }, {
    start: null,
    end: null,
  }));
}

function solution(curTestCase) {
  const distance = curTestCase.end - curTestCase.start;
  
  const minMoveSqrt = Math.floor(Math.sqrt(distance));
  const maxMoveSqrt = minMoveSqrt + 1;

  const minDistance = Math.pow(minMoveSqrt, 2);
  const maxDistance = Math.pow(maxMoveSqrt, 2);
  const maxCount = maxMoveSqrt * 2 - 1;

  const correctionDistance = Math.floor((maxDistance - minDistance) / 2);
  let correctionCount = 1;

  while(distance < maxDistance - (correctionDistance * correctionCount)) {
    correctionCount++;
  }

  return maxCount - (correctionCount - 1);
}

const assert = require("assert");

describe("09_Fly_me_to_the_Alpha_Centauri.js", () => {
  it("{ start: 0, end: 3 }", () => {
    assert(solution({ start: 0, end: 3 }) === 3);
  });

  it("{ start: 1, end: 5 }", () => {
    assert(solution({ start: 1, end: 5 }) === 3);
  });

  it("{ start: 45, end: 50 }", () => {
    assert(solution({ start: 45, end: 50 }) === 4);
  });

  it("{ start: 0, end: 10 }", () => {
    assert(solution({ start: 0, end: 10 }) === 6);
  });

  it("{ start: 11, end: 48 }", () => {
    assert(solution({ start: 11, end: 48 }) === 12);
  });
});
