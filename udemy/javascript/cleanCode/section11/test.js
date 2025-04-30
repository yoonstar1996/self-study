const loadingElements1 = () => {
  const el = document.createElement("div");
  el.setAttribute("class", "loading-1");
  const el2 = document.createElement("div");
  el2.setAttribute("class", "loading-2");
  const el3 = document.createElement("div");
  el3.setAttribute("class", "loading-3");
  el.append(el2);
  el2.append(el3);
  return el;
};

// 위 코드를 아래와 같이 수정하는 것이 좋다

const loadingElements2 = () => {
  // 1. 선언
  const el = document.createElement("div");
  const el2 = document.createElement("div");
  const el3 = document.createElement("div");

  // 2. 로직, 문
  el.setAttribute("class", "loading-1");
  el2.setAttribute("class", "loading-2");
  el3.setAttribute("class", "loading-3");

  // 2. 로직, 문
  el.append(el2);
  el2.append(el3);

  // 3. 반환
  return el;
};
