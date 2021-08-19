function binarySearch(arr, target) {
  return recursion(0, arr.length - 1);
  
  function recursion(start, end) {
    if(start > end) return -1;

    const mid = Math.floor((end + start) / 2);

    if(arr[mid] === target) return mid;
    else if(arr[mid] > target) return recursion(start, mid - 1);
    else return recursion(mid + 1, end);
  }
}

const assert = require("assert");

describe("이분탐색", () => {
  const mock = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  
  it("검색: 3", () => {
    assert(binarySearch(mock, 3) === 2);
  });

  it("검색: 7", () => {
    assert(binarySearch(mock, 7) === 6);
  });

  it("검색 14", () => {
    assert(binarySearch(mock, 14) === 13);
  });

  it("검색 15", () => {
    assert(binarySearch(mock, 15) === 14);
  });
});