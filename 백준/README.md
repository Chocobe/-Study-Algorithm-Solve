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


## ``readline``을 이용한 파일을 ``EOL``단위로 일기

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