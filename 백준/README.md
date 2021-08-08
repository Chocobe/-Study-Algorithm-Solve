# Javascript 파일 입력

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



<br/><hr/><br/>



# 🐫 실수한 부분 정리

## ``for() 반복문``의 ``조건식`` 설정 실수

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



<br/><hr/><br/>



