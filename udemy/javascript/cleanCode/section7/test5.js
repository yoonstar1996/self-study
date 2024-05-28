function sumTotal1() {
  return Array.from(arguments).reduce((acc, curr) => acc + curr);
}

sumTotal1(1, 2, 3, 4, 5); // 15

// 위의 코드를 아래와 같이 수정

function sumTotal2(...args) {
  return args.reduce((acc, curr) => acc + curr);
}

sumTotal2(1, 2, 3, 4, 5, 6); // 21
