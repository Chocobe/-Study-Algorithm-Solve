/**
 * @description
 *    * 알파벳 대소문자로 된 단어가 주어지면, 이 단어에서 가장 많이 사용된 알파벳이 무엇인지 알아내는 프로그램을 작성하시오. 
 *    * 단, 대문자와 소문자를 구분하지 않는다.
 */

const fs = require("fs");
const readline = require("readline");

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

let maxChar;

rl
  .on("line", line => {
    maxChar = new MaxChar(line);
  })
  .on("close", () => {
    maxChar.printMaxChar();
  })

class MaxChar {
  #parsedStr;
  #charCount;
  #maxChar;

  constructor(line) {
    this.#parsedStr = line;
    this.#charCount = {};
    
    this.#countChar();
    this.#extractMaxChar();
  }

  #countChar = () => {    
    this.#parsedStr.trim().toUpperCase().split("").forEach(curChar => {
      if(this.#charCount[curChar]) {
        this.#charCount[curChar]++;
      } else {
        this.#charCount[curChar] = 1;
      }
    });
  }

  #extractMaxChar = () => {
    let maxCount = Number.MIN_SAFE_INTEGER;
    let isFinished = false;

    Object.keys(this.#charCount).forEach(key => {
      if(isFinished) return;
      
      if(maxCount === this.#charCount[key]) {
        this.#maxChar = "?";
        this.isFinished = true;
        return;
      }

      if(maxCount < this.#charCount[key]) {
        maxCount = this.#charCount[key];
        this.#maxChar = key;
      }
    });
  }

  printMaxChar() {
    console.log(this.#maxChar);
  }
}