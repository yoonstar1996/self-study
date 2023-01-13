// 숫자형 이넘
enum ShoesNumber {
  Nike,
  Adidas,
}

let myShoes = ShoesNumber.Nike;
console.log(myShoes); // 0

// 문자형 이넘
enum ShoesString {
  Nike = "나이키",
  Adidas = "아디다스",
}

// 예제
enum Answer {
  Yes = "Y",
  No = "N",
  Q = "Q",
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다");
  } else if (answer === Answer.No) {
    console.log("오답입니다.");
  }
}
askQuestion(Answer.Yes);
// askQuestion("Yes");
// askQuestion("예스");
// askQuestion("y");
