/**
 * @description
 *    * 문자열 S를 입력받은 후에, 각 문자를 R번 반복해 새 문자열 P를 만든 후 출력하는 프로그램을 작성하시오. 
 *    * 즉, 첫 번째 문자를 R번 반복하고, 두 번째 문자를 R번 반복하는 식으로 P를 만들면 된다. 
 *    * S에는 QR Code "alphanumeric" 문자만 들어있다.
 * 
 *    * QR Code "alphanumeric" 문자는 0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ\$%*+-./: 이다.
 */

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

let lineCount = 0;
let logicalStrArr = [];

rl
  .on("line", line => {
    lineCount++;

    if(lineCount > 1) {
      logicalStrArr.push(new LogicalStr(line));
    }
  })
  .on("close", () => {
    logicalStrArr.forEach(logicalStr => {
      logicalStr.printAnswer();
    });
  });

class LogicalStr {
  #count;
  #originValue;
  #answerValue;

  constructor(line) {
    const dataArr = line.trim().split(" ");
    this.#count = dataArr[0];
    this.#originValue = dataArr[1];
    this.#answerValue = "";

    this.#createAnswer();
  }

  #createAnswer = () => {
    this.#originValue.trim().split("").forEach(value => {
      for(let i = 0; i < this.#count; i++) {
        this.#answerValue = this.#answerValue.concat(value);
      }
    });
  }

  printAnswer = () => {
    console.log(this.#answerValue);
  }
}
