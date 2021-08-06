/**
 * @description
 *    * 그룹 단어란 단어에 존재하는 모든 문자에 대해서, 각 문자가 연속해서 나타나는 경우만을 말한다. 
 *    * 예를 들면, ccazzzzbb는 c, a, z, b가 모두 연속해서 나타나고, 
 *      kin도 k, i, n이 연속해서 나타나기 때문에 그룹 단어이지만, 
 *      aabbbccb는 b가 떨어져서 나타나기 때문에 그룹 단어가 아니다.
 * 
 *    * 단어 N개를 입력으로 받아 그룹 단어의 개수를 출력하는 프로그램을 작성하시오.
 */

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

let lineCount = 0;
const groupWordList = [];

rl
  .on("line", line => {
    lineCount++;

    if(lineCount > 1) {
      initData(line);
    }
  })
  .on("close", () => {
    printGroupWordCount();
  });

function initData(line) {
  groupWordList.push(new GroupWord(line));
}

function printGroupWordCount() {
  const count = groupWordList.reduce((count, groupWord) => {
    return groupWord.isGroupWord() ? ++count : count;
  }, 0);
  console.log(count);
}

class GroupWord {
  #originWord;
  #groupWordState;

  constructor(word) {
    this.#originWord = word.trim();
    this.#checkGroupWord();
  }

  #checkGroupWord = () => {
    const charSet = new Set();
    let beforeChar;

    for(let curChar of this.#originWord) {
      if(beforeChar !== curChar && charSet.has(curChar)) {
        this.#groupWordState = false;
        return;
      }

      beforeChar = curChar;
      charSet.add(curChar);
    }

    this.#groupWordState = charSet.size > 0;
  }

  isGroupWord = () => {
    return this.#groupWordState;
  }
}
