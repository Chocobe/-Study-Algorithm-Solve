/**
 * @description
 *    * 재귀적인 패턴으로 별을 찍어 보자. N이 3의 거듭제곱(3, 9, 27, ...)이라고 할 때, 
 *      크기 N의 패턴은 N×N 정사각형 모양이다.
 * 
 *    * 크기 3의 패턴은 가운데에 공백이 있고, 가운데를 제외한 모든 칸에 별이 하나씩 있는 패턴이다.
 */

function star(n) {
  const result = Array.from({ length: n }, () => Array.from({ length: n }, () => ""));
  recursion(0, 0, n, false);
  console.log("원본: ", result);

  return result.map(row => row.join("")).join("\n");

  function recursion(startRow, startCol, size, isBlank) {
    if(isBlank) {
      for(let row = startRow; row < startRow + size; row++) {
        for(let col = startCol; col < startCol + size; col++) {
          result[row][col] = " ";
        }
      }

      return;
    }

    if(size === 3) {
      // console.log("size: 3일 때, ", `(${startRow}, ${startCol})`);
      
      for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 3; j++) {
          const row = startRow + i;
          const col = startCol + j;

          if(i === 1 && j === 1) {
            result[row][col] = " ";
          } else {
            result[row][col] = "*";
          }
        }
      }

      return;
    }

    const nextSize = size / 3;
    
    for(let i = 0; i < 3; i++) {
      for(let j = 0; j < 3; j++) {
        const nextRow = i * nextSize;
        const nextCol = j * nextSize;
        
        if(i === 1 && j === 1) {
          // console.log("공백 (nextRow, nextCol): ", `(${nextRow}, ${nextCol})`);
          recursion(nextRow, nextCol, nextSize, true);
        } else {
          recursion(nextRow, nextCol, nextSize, false);
        }

        // console.log("(nextRow, nextCol): ", `(${nextRow}, ${nextCol})`);
      }
    }
  }
}

const assert = require("assert");

describe("03_별_찍기.js", () => {
  const mock = "***\n* *\n***";

  it("star(3)", () => {
    const r = star(27);
    console.log(r);
  });
});