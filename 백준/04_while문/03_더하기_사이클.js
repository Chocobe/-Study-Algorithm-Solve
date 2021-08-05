/**
 * @description:
 *    * 0보다 크거나 같고, 99보다 작거나 같은 정수가 주어질 때 다음과 같은 연산을 할 수 있다. 
 *    * 먼저 주어진 수가 10보다 작다면 앞에 0을 붙여 두 자리 수로 만들고, 각 자리의 숫자를 더한다. 
 *    * 그 다음, 주어진 수의 가장 오른쪽 자리 수와 앞에서 구한 합의 가장 오른쪽 자리 수를 이어 붙이면 새로운 수를 만들 수 있다. 
 *    * 다음 예를 보자.
 * 
 *    * 26부터 시작한다. 2+6 = 8이다. 
 *    * 새로운 수는 68이다. 6+8 = 14이다. 
 *    * 새로운 수는 84이다. 8+4 = 12이다. 
 *    * 새로운 수는 42이다. 4+2 = 6이다. 
 *    * 새로운 수는 26이다.
 * 
 *    * 위의 예는 4번만에 원래 수로 돌아올 수 있다. 따라서 26의 사이클의 길이는 4이다.
 *    * N이 주어졌을 때, N의 사이클의 길이를 구하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

let dataSet = new Set();
let firstData = "";

rl
  .on("line", line => {
    parseData(line);
    firstData = line;
  })
  .on("close", () => {
    executeStep(firstData);
  });

// 두자리 숫자로 변환
function parseToDoubleDigits(strValue) {
  return strValue.length > 1 ? strValue : "0".concat(strValue);
}

function parseData(line) {
  const parsedData = parseToDoubleDigits(line.trim());
  dataSet.add(parsedData);
}

function executeStep(strValue) {
  // 두자리 숫자로 변환
  const parsedValue = parseToDoubleDigits(strValue);
  
  // 두 숫자의 합
  const resultSum = sumEachDigits(parsedValue);

  // 원래값[1] 과 "두 숫자의 합"[1] 연결
  const resultConcat = concatEachFirstDigit(parsedValue, resultSum);

  // 사이클의 반복 여부 검사
  if(isDuplicated(resultConcat)) {
    console.log(dataSet.size);
  } else {
    executeStep(resultConcat);
  }
  
  // 두 숫자의 합
  function sumEachDigits(strValue) {    
    const result = (Number(parsedValue[1]) + Number(parsedValue[0])).toString();
    return result.length > 1 ? result : "0".concat(result);
  }

  // 원래값[1] 과 "두 숫자의 합"[1] 연결
  function concatEachFirstDigit(originValue, resultValue) {
    return originValue[1].concat(resultValue[1]);
  }

  // 사이클의 반복 여부 검사
  function isDuplicated(value) {
    if(dataSet.has(value)) {
      return true;
    }

    dataSet.add(value);
    return false;
  }
}