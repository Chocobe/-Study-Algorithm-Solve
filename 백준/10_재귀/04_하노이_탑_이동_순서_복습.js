const testCase = 3;
console.log(hanoi(testCase));

function hanoi(testCase) {
  const history = [];
  recursion(testCase, 1, 3);
  return history;

  function recursion(block, start, end) {
    if(block === 1) {
      history.push({
        start,
        end,
      });
      return;
    }

    const mid = (1 + 2 + 3) - (start + end);
    
    recursion(block - 1, start, mid);

    history.push({
      start,
      end,
    });

    recursion(block - 1, mid, end);
    return;
  }
}
