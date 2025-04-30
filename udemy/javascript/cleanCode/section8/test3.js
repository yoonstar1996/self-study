export const loader1 = () => {
  const el = document.createElement("div");
  el.setAttribute("class", "loading de-flex justify-center mt-3");

  const el2 = document.createElement("div");
  el2.setAttribute("class", "relative spinner-container");

  const el3 = document.createElement("div");
  el3.setAttribute("class", "material spinner");

  el.append(el2);
  el2.append(el3);
};

// 위 코드를 아래와 같이 수정

const createLoader = () => {
  const el = document.createElement("div");
  const el2 = document.createElement("div");
  const el3 = document.createElement("div");

  return {
    el,
    el2,
    el3,
  };
};

const createLoaderStyle = ({ el, el2, el3 }) => {
  el.setAttribute("class", "loading de-flex justify-center mt-3");
  el2.setAttribute("class", "material spinner");
  el3.setAttribute("class", "relative spinner-container");

  return {
    newEl: el,
    newEl2: el2,
    newEl3: el3,
  };
};
const loader2 = () => {
  const { el, el2, el3 } = createLoader();
  const { newEl, newEl2, newEl3 } = createLoaderStyle({ el, el2, el3 });

  newEl.append(newEl2);
  newEl2.append(newEl3);

  return newEl;
};

//

const element = document.querySelector("#modal");
element.style.backgroundColor = "black";
element.classList.add("--open");
element.classList.remove("--open");

// 위의 코드를 아래와 같이 수정

const changeColor = (element) => {
  element.style.backgroundColor = "black";
};

const openModal = (element) => {
  element.classList.add("--open");
};

const closeModal = (element) => {
  element.classList.add("--open");
};

const myModal = () => {
  // 모달 생성 코드
  return document.querySelector("#modal");
};

openModal(myModal);
changeColor(myModal);
closeModal(myModal);
