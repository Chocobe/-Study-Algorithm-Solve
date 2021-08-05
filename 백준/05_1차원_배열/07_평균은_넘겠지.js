/**
 * @description:
 *    * 대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.
 */

class ScoreInfo {
  #count;
  #scoreList = [];
  #avg = 0;

  constructor(line) {    
    this.#initScore(line);
    this.#initAvg();
  }

  #initScore = line => {
    line.split(" ").forEach((value, idx) => {
      if(idx === 0) {
        this.#count = value;
      } else {
        this.#scoreList.push(Number(value));
      }
    })
  }

  #initAvg = () => {
    const totalScore = this.#scoreList.reduce((total, score) => total + score);
    this.#avg = totalScore / this.#count;
  }

  getOverRatio() {
    let overCount = 0;

    this.#scoreList.forEach(value => {
      if(value > this.#avg) {
        overCount++;
      }
    });

    return (overCount / this.#count * 100).toFixed(3).concat("%");
  }
}

const fs = require("fs");
const readline = require("readline");

const scoreInfoList = [];
let lineCount = 0;

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

rl
  .on("line", line => {
    lineCount++;

    if(lineCount > 1) {
      scoreInfoList.push(new ScoreInfo(line));
    }
  })
  .on("close", () => {
    let result = "";
    
    scoreInfoList.forEach(scoreInfo => {
      result = result.concat("\n", scoreInfo.getOverRatio());
    });

    console.log(result.trim());
  });