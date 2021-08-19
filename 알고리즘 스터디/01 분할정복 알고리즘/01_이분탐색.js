/**
 * @description
 *    * 분할정복 알고리즘의 대표적인 사례인 "Binary Search"를 구현하였습니다.
 * 
 *    * 원리
 *        * return 찾는값 === 중앙값 ? 현재인덱스 : 재귀호출()
 */

function searchBinary(arr, target) {
  return recursion(0, arr.length - 1);

  function recursion(start, end) {
    if(start > end) {
      return -1;
    }

    const mid = Math.floor((end + start) / 2);

    if(target > arr[mid]) {
      return recursion(mid + 1, end);
    } else if(target < arr[mid]) {
      return recursion(start, mid - 1);
    } else {
      return mid;
    }
  }
}

const assert = require("assert");

describe("01_이분탐색.js", () => {
  const mock = [1, 2, 3, 4, 5, 6, 7, 10, 20];

  it("3의 index", () => {
    console.log(searchBinary(mock, 3));
    assert(searchBinary(mock, 3) === 2);
  });

  it("7의 index", () => {
    assert(searchBinary(mock, 7) === 6);
  });

  it("10의 index", () => {
    assert(searchBinary(mock, 10) === 7);
  });

  it("20의 index", () => {
    assert(searchBinary(mock, 20) === 8);
  })
});