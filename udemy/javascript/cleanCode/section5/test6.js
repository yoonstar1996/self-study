const price1 = ["2000", "1000", "3000", "5000", "4000"];

function getWonPrice1(priceList) {
  let temp = [];

  for (let i = 0; i < priceList.length; i++) {
    temp.push(priceList[i] + "원");
  }

  return temp;
}

// 요구사항
// 1. 원화 표기
// 2. 1000원 초과 리스트만 출력
// 3. 가격 순 정렬

const price2 = ["2000", "1000", "3000", "5000", "4000"];

const suffixWon = (price) => {
  price + "원";
};

const isOverThousand = (price) => Number(price) > 1000;

function getWonPrice2(priceList) {
  const isOverList = priceList.filter(isOverThousand);
  const sortList = isOverList.sort((a, b) => a - b);

  return sortList.map(suffixWon);
}
