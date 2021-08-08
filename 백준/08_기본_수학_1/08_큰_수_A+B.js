/**
 * @description
 *    * 두 정수 A와 B를 입력받은 다음, A+B를 출력하는 프로그램을 작성하시오.
 */

// 1. 파일 읽기 (testCase)
//    1-1. 파일 읽기
//    1-2. 배열로 분할
//    1-3. 배열요소를 char배열로 분할
//    1-4. 분할된 (배열의 가장 긴 길이 + 1) 로 초기화
//    1-5. 배열의 뒤부터 값 채우기

// 2. 배열의 두 요소 더하기
//    2-1. 배열의 같은 index끼리 더하기

// 3. 자리올림을 이전 index에 더하기

const fs = require("fs");
const readline = require("readline");

let testCase;

const rl = readline.createInterface({
  input: fs.createReadStream("./dev/stdin"),
  output: undefined,
});

rl
  .on("line", line => {
    testCase = initTestCase(line);
  })
  .on("close", () => {
    const sumArr = sumForEachElement(testCase);
    console.log(createBigInteger(sumArr));
  });

function initTestCase(line) {
  const arr = line.toString().trim().split(" ").map(value => {
    return value.split("").map(value => Number(value));
  });

  const maxLength = arr.reduce((max, curArr) => {
    return Math.max(max, curArr.length);
  }, 0);

  arr.forEach(subArr => {
    const loopMax = maxLength + 1 - subArr.length;

    for(let i = 0; i < loopMax; i++) {
      subArr.unshift(0);
    }
  });

  return arr;
}

function sumForEachElement(arr2d) {  
  return arr2d.reduce((resultArr, subArr) => {    
    if(resultArr.length === 0) {
      return [...subArr];
    } else {
      return resultArr.map((value, idx) => {
        return value + subArr[idx];
      });
    }
  }, []);
}

function createBigInteger(digitArr) {
  let ceilValue = 0;

  return digitArr.reverse().map(value => {
    const resultValue = value + ceilValue;
    ceilValue = Math.floor(resultValue / 10);
    
    return resultValue % 10;
  }).reverse().join("").replace(/^0*/, "");
}

// const assert = require("assert");

// describe("08_큰_수_A+B.js", () => {
//   let mochaTestCase;

//   before(() => {
//     const line = fs.readFileSync("./dev/stdin");
//     mochaTestCase = initTestCase(line);
//   });

//   describe("initTestCase()", () => {
//     it("length", () => {
//       const testCase = fs.readFileSync("./dev/stdin").toString().split(" ");
//       assert(testCase.length === mochaTestCase.length);
//     }); // length

//     it("subArr.length", () => {
//       const testCase = fs.readFileSync("./dev/stdin").toString().split(" ").map(value => {
//         return value.split("").map(strDigit => Number(strDigit));
//       });

//       const maxLength = testCase.reduce((max, subArr) => {
//         return Math.max(max, subArr.length);
//       }, 0);

//       mochaTestCase.forEach(subArr => {
//         assert(subArr.length === maxLength + 1);
//       });
//     }); // subArr.length
//   }); // describe("initTestCase()", () => {})

//   it("sumForEachElement()", () => {
//     const targetResult = sumForEachElement(mochaTestCase);

//     const testResult = mochaTestCase.reduce((resultArr, subArr) => {
//       if(resultArr.length === 0) {
//         return [...subArr];
//       } else {
//         return resultArr.map((value, idx) => {
//           return value + subArr[idx];
//         });
//       }
//     }, []);

//     let isSame = true;

//     for(let i = 0; i < testResult.length; i++) {
//       if(testResult[i] !== targetResult[i]) {
//         isSame = false;
//         break;
//       }
//     }

//     assert(isSame);
//   }); // sumForEachElement()

//   it("createBigInteger()", () => {
//     let testResult = sumForEachElement(mochaTestCase);
//     const targetStr = createBigInteger(sumForEachElement(mochaTestCase));

//     let ceilValue = 0;

//     const resultStr = testResult.reverse().map(value => {
//       const curResult = value + ceilValue;
//       ceilValue = Math.floor(curResult / 10);
      
//       return curResult % 10;
//     }).reverse().join("");

//     assert(resultStr === targetStr);
//   }); // createBigInteger()

//   it("999999999999999999 111111111111111111111111111111111", () => {
//     const testCase = initTestCase("999999999999999999 111111111111111111111111111111111");
//     const curResult = sumForEachElement(testCase);
//     const result = createBigInteger(curResult);

//     assert(result === "111111111111112111111111111111110")
//   });

//   it("99999 1111111111", () => {
//     const testCase = initTestCase("99999 1111111111");
//     const curResult = sumForEachElement(testCase);
//     const result = createBigInteger(curResult);

//     assert(result === "1111211110");
//   });
// });
