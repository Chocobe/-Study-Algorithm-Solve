/**
 * @description
 *    * 알파벳 소문자로만 이루어진 단어 S가 주어진다. 
 *    * 각각의 알파벳에 대해서, 단어에 포함되어 있는 경우에는 처음 등장하는 위치를, 
 *      포함되어 있지 않은 경우에는 -1을 출력하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

const charCountMap = new Map();
let inputData;

rl
  .on("line", line => {
    initStatus();
    inputData = line.trim().split("");
  })
  .on("close", () => {
    countChar();
    printCharCount();
  })

function initStatus() {
  const codeA = "a".charCodeAt();
  const codeZ = "z".charCodeAt();

  for(let code = codeA; code <= codeZ; code++) {
    charCountMap.set(code, -1);
  }
}

function countChar() {
  inputData.forEach((curChar, idx) => {
    const curCode = curChar.charCodeAt();

    if(charCountMap.get(curCode) === -1) {
      charCountMap.set(curCode, idx);
    }
  });
}

function printCharCount() {
  let result = "";

  charCountMap.forEach(value => {
    result = result.concat(" ", value);
  })

  console.log(result.trim());
}