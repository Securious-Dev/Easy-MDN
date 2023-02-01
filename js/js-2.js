function testWhile() {
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}

function testFor() {
  for (let i = 1; i < 11; i++) {
    console.log(i);
  }
}

function testBreak() {
  let i = 1;
  while (true) {
    if (i > 10) break;

    if (i % 2 !== 0) {
      i++;
      continue;
    }

    console.log(i);
    i++;
  }
}

function testIf() {
  const inputElementValue = document.querySelector("#ifTest").value;

  const i = Number(inputElementValue);

  if (i % 2 === 0 && i >= 0) {
    alert("짝수(또는 0) 입니다"); // i가 짝수인 경우 실행
  } else if (i % 2 === 1 && i >= 0) {
    alert("홀수 입니다"); // i가 홀수인 경우 실행 (모든 홀수를 2로 나눈 나머지는 1이다)
  } else {
    alert("양의 정수가 아닙니다"); // i가 양의 정수가 아닌 경우 실행
  }
}
