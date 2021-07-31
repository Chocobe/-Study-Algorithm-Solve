const fs = require("fs");
const readline = require("readline");

class Calculator {
  constructor(readPath, writePath) {
    this.dataCount = 0;
    this.dataArr = [];

    this.readPath = readPath;
    this.writePath = writePath;
    
    this.reader = readline.createInterface({
      input: fs.createReadStream(this.readPath),
      output: undefined,
    });
  }

  #createReader = function(readPath) {
    this.reader = readline.createInterface({
      input: fs.createReadStream(readPath),
      output: undefined,
    });
  }

  #readFile = function(readPath) {
    if(readPath) {
      this.readPath = readPath;
      this.#createReader(this.readPath);
    }

    this.reader
      .on("line", line => {
        const curData = line.trim().split(" ");
        
        if(curData.length === 1) {
          this.dataCount = Number(curData[0]);
        } else if(curData.length > 1) {
          this.dataArr.push([
            Number(curData[0]),
            Number(curData[1]),
          ]);
        }
      });
  }

  #writeFile = function(result, writePath) {
    if(writePath) {
      this.writePath = writePath;
    }

    fs.writeFileSync(this.writePath, result);
  }

  #sum = function(a, b) {
    return a + b;
  }

  sumAll() {
    this.#readFile();
    
    this.reader
      .on("close", () => {
        console.log("파일: ", this.dataArr);
        
        const result = this.dataArr.map(([a, b]) => {
          console.log("a: ", a);
          return this.#sum(a, b);
        }).toString().trim().replace(/,/g, "\n");

        this.#writeFile(result);
      });
  }
}

const calc = new Calculator("./dev/stdio", "result");
calc.sumAll();

// const rl = readline.createInterface({
//   input: fs.createReadStream("./dev/stdio"),
//   output: fs.createWriteStream("./result"),
// });

// let dataCount = 0;
// const inputArr = [];

// rl
//   .on("line", line => {
//     const curInput = line.trim().split(" ");

//     if(curInput[1]) {
//       inputArr.push([Number(curInput[0]), Number(curInput[1])]);
//     } else {
//       dataCount = inputArr[0];
//     }
//   })
//   .on("close", () => {
//     console.log("결과: ", inputArr);
//     fs.writeFileSync("./result", inputArr);
//   });