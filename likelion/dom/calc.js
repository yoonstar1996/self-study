const section = document.querySelector("#calc-app");
const xInput = section.querySelector(".x-input");
const yInput = section.querySelector(".y-input");
const resultSpan = section.querySelector(".result");
const submitBtn = section.querySelector(".submit-btn");
const resetBtn = section.querySelector(".reset-btn");

xInput.value = 10;
yInput.value = 5;

submitBtn.onclick = (e) => {
  e.preventDefault();
  const x = parseInt(xInput.value);
  const y = parseInt(yInput.value);
  resultSpan.textContent = x + y;
};

resetBtn.onclick = (e) => {
  e.preventDefault();
  xInput.value = 0;
  yInput.value = 0;
};
