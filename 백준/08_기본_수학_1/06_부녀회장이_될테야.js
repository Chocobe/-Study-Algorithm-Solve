/**
 * @description
 *    * 평소 반상회에 참석하는 것을 좋아하는 주희는 이번 기회에 부녀회장이 되고 싶어 각 층의 사람들을 불러 모아 반상회를 주최하려고 한다.
 *    * 이 아파트에 거주를 하려면 조건이 있는데, 
 *      “a층의 b호에 살려면 자신의 아래(a-1)층의 1호부터 b호까지 사람들의 수의 합만큼 사람들을 데려와 살아야 한다” 
 *      는 계약 조항을 꼭 지키고 들어와야 한다.
 * 
 *    * 아파트에 비어있는 집은 없고 모든 거주민들이 이 계약 조건을 지키고 왔다고 가정했을 때, 
 *      주어지는 양의 정수 k와 n에 대해 k층에 n호에는 몇 명이 살고 있는지 출력하라. 
 * 
 *    * 단, 아파트에는 0층부터 있고 각층에는 1호부터 있으며, 0층의 i호에는 i명이 산다.
 * 
 *    * 제한: 1 <= k, 1 <= n <= 14
 */

// apt[0] = [ 1, 2,  3,  4,  5,   6,   7 ] => diff: 1,  1,  1,  1,  1
// apt[1] = [ 1, 3,  6, 10, 15,  21,  28 ] => diff: 2,  3,  4,  5,  6
// apt[2] = [ 1, 4, 10, 20, 35,  56,  84 ] => diff: 3,  6, 10, 15, 21
// apt[3] = [ 1, 5, 15, 35, 70, 126, 210 ] => diff: 4, 10, 20, 35, 56

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

let lineCount = 0;
let testCase;
const aptData = [];

rl
  .on("line", line => {
    lineCount++;
    addTestCase(line, lineCount);
  })
  .on("close", () => {
    initAptData();
    printAnswer();
  });

function addTestCase(line, lineCount) {
  const parsedValue = Number(line.toString().trim());

  if(lineCount === 1) {
    testCase = Array.from({ length: parsedValue }, () => ({
      floor: null,
      room: null,
    }));

    return;
  }

  const testCaseNum = Math.floor(lineCount / 2) - 1;

  if(lineCount % 2 === 0) {
    testCase[testCaseNum].floor = parsedValue;
  } else {
    testCase[testCaseNum].room = parsedValue;
  }
}

function initAptData() {
  let maxFloor = Number.MIN_SAFE_INTEGER;
  let maxRoom = Number.MIN_SAFE_INTEGER;

  testCase.forEach(curCase => {
    maxFloor = Math.max(curCase.floor, maxFloor);
    maxRoom = Math.max(curCase.room, maxRoom);
  });

  aptData.push(
    Array.from({ length: maxRoom }, (_val, idx) => idx + 1)
  );

  for(let floor = 1; floor <= maxFloor; floor++) {
    const curFloorArr = Array.from({ length: maxRoom }, () => 1);

    for(let room = 0; room < maxRoom; room++) {
      let curCount = 0;

      for(let beforeRoom = 0; beforeRoom <= room; beforeRoom++) {
        curCount += aptData[floor - 1][beforeRoom];
      }

      curFloorArr[room] = curCount;
    }

    aptData.push(curFloorArr);
  }
}

function printAnswer() {
  let result = "";

  testCase.forEach(curCase => {
    result = result.concat("\n", aptData[curCase.floor][curCase.room - 1]);
  });

  console.log(result.trim());
}