/**
 * @description:
 *    * 어떤 양의 정수 X의 각 자리가 등차수열을 이룬다면, 그 수를 한수라고 한다. 
 *    * 등차수열은 연속된 두 개의 수의 차이가 일정한 수열을 말한다. 
 *    * N이 주어졌을 때, 1보다 크거나 같고, N보다 작거나 같은 한수의 개수를 출력하는 프로그램을 작성하시오. 
 */

const fs = require("fs");
const readline = require("readline");

class HanSoo {
  #max;
  #count;

  constructor(line) {
    this.#max = Number(line.trim());
    this.#initCount();
  }

  #initCount = () => {
    this.#count = 0;
    
    for(let value = 1; value <= this.#max; value++) {
      if(this.#isArithmeticSequence(value)) {
        this.#count++;
      }
    }
  }

  #isArithmeticSequence = value => {
    const digitArr = value.toString().split("").map(value => Number(value));
    const diff = digitArr[1] - digitArr[0];

    for(let idx = 0; idx < digitArr.length - 1; idx++) {
      if(digitArr[idx + 1] - digitArr[idx] !== diff) {
        return false;
      }
    }

    return true;
  }

  printCount = () => {
    console.log(this.#count);
  }
}

let hanSoo;

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

rl
  .on("line", line => {
    hanSoo = new HanSoo(line);
  })
  .on("close", () => {
    hanSoo.printCount();
  });
