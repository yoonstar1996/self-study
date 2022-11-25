const quotes = [
  {
    quote: "삶이 있는 한 희망은 있다.",
    author: "키케로",
  },
  {
    quote: "언제나 현재에 집중할수 있다면 행복할것이다.",
    author: "파울로 코엘료",
  },
  {
    quote: "행복은 습관이다,그것을 몸에 지니라.",
    author: "허버드",
  },
  {
    quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
    author: "찰스 다윈",
  },
  {
    quote: "겨울이 오면 봄이 멀지 않으리.",
    author: "쎌리",
  },
  {
    quote:
      "문제는 목적지에 얼마나 빨리 가느내가 아니라 그 목적지가 어디냐는 것이다.",
    author: "메이벨 뉴컴버",
  },
  {
    quote: "문제점을 찾지 말고 해결책을 찾으라.",
    author: "헨리 포드",
  },
  {
    quote: "인생에 뜻을 세우는데 있어 늦은 때라곤 없다.",
    author: "볼드윈",
  },
  {
    quote:
      "이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.",
    author: "탈무드",
  },
  {
    quote:
      "우선 무엇이 되고자 하는가를 자신에게 말하라 그리고 해야 할일을 하라.",
    author: "에픽 토테스",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
