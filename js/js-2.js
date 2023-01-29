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
    if ( i > 10 ) break;

    if ( i % 2 !== 0 ) {
      i++;
      continue;
    }
    
    console.log(i);
    i++;
  }
}