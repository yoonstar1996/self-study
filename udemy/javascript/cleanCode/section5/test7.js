const price2 = ["2000", "1000", "3000", "5000", "4000"];

const suffixWon = (price) => price + "원";
const isOverThousand = (price) => Number(price) > 1000;
const ascendingList = (a, b) => a - b;

function getWonPrice2(priceList) {
  return priceList
    .filter(isOverThousand) // filter로 원하는 조건에 맞는 배열 리스트 만들기
    .sort(ascendingList) // sort 정렬
    .map(suffixWon); // map 배열 요소들을 다시 정리
}

console.log(getWonPrice2(price2)); // ["2000원", "3000원", "4000원", "5000원"]
