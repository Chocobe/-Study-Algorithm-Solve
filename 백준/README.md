##### top
# 알고리즘 (자료구조) 연습

[01. 실수한 부분 정리](#01)

[01-01. ``for() 반복문``의 ``조건식`` 설정 실수](#01-01)

[02. 깨닳음 정리](#02)

[02-01. 분할정복 알고리즘 도출방법](#02-01)



##### 00
# 🐫 Javascript 파일 입력

Javascript로 파일을 입력받는 방법에는 2가지가 있습니다.

* ``fs``을 이용한 파일 전체 읽기
* ``readline``을 이용한 파일을 ``EOL``단위로 일기


<br/><br/>


## ``fs``을 이용한 파일 전체 읽기

``fs``의 ``readFileSync()`` 메서드로 파일 전체를 읽을 수 있습니다.

```javascript
const fs = require("fs");

const fileData = fs.readFileSync("./dev/stdio").toString().trim();
console.log("파일 내용: ", fileData);
```


<br/><br/>


## ``readline``을 이용한 파일을 ``EOL``단위로 읽기

``readline``을 사용하면, 파일내용을 ``Line (줄)``단위로 읽을 수 있습니다.

```javascript
const readline = require("readline");
const fs = require("fs");

const reader = readline.createInterface({
  input: fs.createReadStream("./dev/stdio"),
  output: undefined
});

reader
  .on("line", line => {
    console.log("현재 라인: ", line);
  })
  .on("close", () => {
    console.log("완료");
    process.exit();
  });
```



<br/>

[🔺 Top](#top)

<hr/><br/>



##### 01
# 🐫 실수한 부분 정리

##### 01-01
## 01-01. ``for() 반복문``의 ``조건식`` 설정 실수

``for() 반복문``을 사용하여, 배열에 ``unshift()``로 요소를 추가하면서 발생한 실수 입니다.

<br/>

길이가 다른 두개의 배열이 있습니다.

```javascript
const a = [
  1, 2, 3
];

const b = [
  1, 2, 3, 4, 5
];
```

<br/>

이 때, ``a 배열``의 길이를 ``b 배열``과 맞추기 위해 ``for() 반복문``에서 ``unshift(0)``를 사용하였습니다.

중요한 점은, ``for() 반복문`` 의 ``조건식`` 입니다.

```javascript
const a = [
  1, 2, 3
];

const b = [
  1, 2, 3, 4, 5
];

for(let i = 0; i < b.length - a.length; i++) {
  a.unshift(0);
}
```

<br/>

위의 코드의 결과, ``a 배열``의 길이는 ``5개`` 가 아닌 ``4개``만 됩니다.

``i === 1`` 일 때, 반복 조건문을 살펴보면 다음고 같습니다.

```javascript
// "i === 1" 일 때, for()문 조건 상태: 
//    : b.length - a.length
//    : 5 - 4
//    : 1
```

<br/>

다시, ``i === 1``일 때의 청사진을 표현하면 다음과 같습니다.

```javascript
for(let i = 1; i < 5 - 4; i++) {
  a.unshift(0);
}
```

<br/>

즉, ``조건문``이 변경되기 때문에, 의도한 횟수만큼 반복하지 못합니다.

이를 해결하기 위해서는, 반복할 횟수를 ``for() 반복문`` 밖에서 정의하고, ``고정된 조건문``으로 사용해야 합니다.

아래 코드는 이 문제를 해결한 방법 입니다.

```javascript
const a = [
  1, 2, 3
];

const b = [
  1, 2, 3, 4, 5
];

const loopMax = b.length - a.length;

for(let i = 0; i < loopMax; i++) {
  a.unshift(0);
}

console.log(a.length); // 5
console.log(b.length); // 5
```



<br/>

[🔺 Top](#top)

<hr/><br/>



##### 02
# 🐫 깨닳음 정리

##### 02-01
## 02-01. 분할정복 알고리즘 도출방법

``분할정복 알고리즘``이란, 문제해결 방법을 하위 문제로 나누어, ``재귀적``으로 해결하는 방법을 말합니다.

``분할정복 알고리즘``으로 문제를 해결할 때는 다음과 같은 과정을 생각해 봅니다.

* ``분할``: 문제를 하위 문제로 분할 합니다.
* ``정복``: 분할된 문제를 ``재귀적``으로 해결합니다.
* ``병합``: 정복한 문제해결 방법을 병합하여, ``분할정복 알고리즘``이 구현됩니다.

<br/>

즉, 문제해결 방법이 ``반복적``인 과정을 통해 만들어 질 경우, ``분할정복 알고리즘``을 떠올리게 됩니다.

이러한 ``반복적인 과정``을 코드로 만들기 위해서는 반복의 시작이 아닌, ``반복의 마지막 루프``에서 역순으로 생각하면, 구현에 좀 더 편하게 다다를 수 있었습니다.

1. 결과값을 도출하는 마지막 ``함수`` 구현 (``루프 종료 조건``)
    * ``분할정복 알고리즘``의 ``재귀함수`` 구현에서 가장 중요한 ``루프 종료 조건``을 도출할 수 있습니다.
    * ``루프 종료 조건``을 파악해야지만, 구체적인 코드 구현에서 ``로직에 대한 오류``를 피해갈 수 있었습니다.

2. ``루프 종료 조건``이 아닌 경우는, ``재귀적 로직``으로 구현합니다.
    * 이 때, ``재귀적 로직``을 바로 만들기는 어렵기 때문에 다음과 같은 단계로 구현해 봅니다.
    * 때문에, 가장 쉬운 ``테스트 케이스``를 대상으로, ``리터럴 값``을 사용하여 코드를 구현합니다.

2-1. 가장 쉬운 ``테스트 케이스``를 대상으로, ``리터럴 값``을 사용한 코드를 구현 합니다.
    * 즉, 해당 ``테스트 케이스``에 한해서만, 의도한 결과값이 나오는 함수가 만들어 집니다.

2-2. ``2-1``에서 사용한 ``테스트 케이스``의 ``다음 테스트 케이스``를 대상으로, ``리터럴 값``을 사용한 코드를 구현 합니다.

2-3. ``2-2``에서 사용한 ``테스트 케이스``의 ``다음 테스트 케이스``를 대상으로, ``리터럴 값``을 사용한 코드를 구현 합니다.

<br/>

``재귀 함수``를 도출할 수 있을 때 까지, 위의 ``2번 단계``의 코드를 계속 작성해 보면, ``추출할 변수``와 ``로직``이 눈에 들어오게 되며, 이를 사용하여 ``재귀 함수``를 만들 수 있습니다.

<br/>

처음부터 ``재귀 함수``를 구현하려 하면, 오히려 버그가 발생하는 경험을 하였습니다.

때문에, 정확한 로직을 도출하기 위해서, ``가장 쉬운 테스트 케이스`` 부터 한 단계씩 모든 케이스를 코드로 구현하여, 눈으로 직접 ``반복 로직``을 파악하는 것이 좋다는 생각을 하게 되었습니다.

<br/>

아래의 코드는 ``분할정복 알고리즘``에 대해 생각하게된 문제인, ``하노이 탑`` 도출 과정 입니다.

```javascript
// 1. 결과값을 도출하는 마지막 ``함수``구현

function hanoi(n) {
  const history = [];
  recursion(n, 1, 3);

  function recursion(block, start, end) {
    // block === 1 일 때, 현재의 ``재귀 호출``을 종료 합니다.
    if(block === 1) {
      history.push({
        start,
        end,
      });
      return;
    }
  }
}
```

<br/>

```javascript
// n === 1일 때, 재귀함수가 종료되므로, 
//    n === 2일 때 로직을 ``리터럴 값``으로 구현합니다.

function hanoi(n) {
  const history = [];
  recursion(n, 1, 3);

  function recursion(block, start, end) {
    if(block === 1) {
      history.push({
        start,
        end,
      });
    }

    if(block === 2) {
      // 1번 블록을 ``1 => 2``로 이동
      recursion(1, 1, 2);

      // 2번 블록을 ``1 => 3``으로 이동
      history.push({
        start: 1,
        end: 3,
      });

      // 1번 블록을 ``2 => 3``으로 이동
      recursion(1, 2, 3);
    }
  }
}
```

<br/>

```javascript
// n === 3일 때의 로직을 구현합니다.

function hanoi(n) {
  const history = [];
  recursion(n, 1, 3);

  function recursion(block, start, end) {
    if(block === 1) {
      history.push({
        start,
        end,
      });
      return;
    }

    if(block === 2) {
      recursion(1, 1, 2);

      history.push({
        start: 1,
        end: 3,
      });

      recursion(1, 2, 3);
    }

    if(block === 3) {
      // 1번 블록을 ``1 => 3``으로 이동
      recursion(1, 1, 3);

      // 2번 블록을 ``1 => 2``로 이동
      history.push({
        start: 1,
        end: 2,
      });

      // 1번 블록을 ``3 => 2``로 이동
      recursion(1, 3, 2);

      // 3번 블록을 ``1 => 3``으로 이동
      history.push({
        start: 1,
        end: 3,
      });

      // 1번 블록을 ``2 => 1``로 이동
      recursion(1, 2, 1);

      // 2번 블록을 ``2 => 3``으로 이동
      history.push({
        start: 2,
        end: 3,
      });

      // 1번 블록을 ``1 => 3``으로 이동
      recursion(1, 1, 3);
    }
  }
}
```

<br/>

위의 단계(n === 3)까지 ``리터럴 값``으로 코드를 구현해본 결과, 반복되는 부분들을 찾을 수 있습니다.

만약, 아직 찾지 못했다면, 다음 ``테스트 케이스``까지 만들어 봅니다.

(다만, 앞으로도 예외 상황없이 재귀호출을 한다면, 여기까지의 코드에서 ``재귀 호출``에 대한 로직을 도출하도록 해야 합니다)

<br/>

위의 코드에서 발견된 반복 조건은 다음과 같습니다.

* ``n === 1``이면 재귀 호출을 종료 합니다.
* ``n === 2``부터는 재귀 호출로 동작 합니다.
* ``n === 3``일 때는, ``n === 2``를 호출하되, ``start``와 ``end``값을 변경하여 호출 합니다.

```javascript
// n === 3일 때, ``n === 2``를 호출하는 부분
function hanoi(n) {
  const history = [];
  recursion(n, 1, 3);

  function recursion(block, start, end) {
    if(block === 1) {
      history.push({
        start,
        end,
      });
      return;
    }

    if(block === 2) {
      // start와 end 사이의 임시공간
      const mid = (1 + 2 + 3) - (start + end);
      recursion(1, start, mid);

      history.push({
        start,
        end,
      });

      recursion(1, mid, end);
      return;
    }

    if(block === 3) {
      // n === 2일 때, 목적지를 2번 위치로 재귀 호출
      //    재귀 호출로 인해, 1번, 2번 블록 모두 처리
      recursion(2, 1, 2);

      // 3번 블록을 목적지인 3번 위치로 이동
      history.push({
        start,
        end,
      });

      // n === 2일 때, 목적지를 3번 위치로 재귀 호출 (시작점은 2번 위치)
      //    재귀 호출로 인해, 1번, 2번 블록 모두 처리
      recursion(2, 2, 3);
    }
  }
}
```

<br/>

위의 코드의 ``리터럴 값``을 모두 변수로 변경하면, 최종적인 ``분할정복 알고리즘``을 도출할 수 있습니다.

```javascript
function hanoi(n) {
  const history = [];
  recursion(n, 1, 3);

  function recursion(block, start, end) {
    if(block === 1) {
      history.push({
        start,
        end,
      });
      return;
    }

    const mid = (1, 2, 3) - (start + end);

    recursion(block - 1, start, mid);

    history.push({
      start,
      end,
    });

    recursion(block - 1, mid, end);
  }
}
```



<br/>

[🔺 Top](#top)

<hr/><br/>



