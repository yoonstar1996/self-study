const openBtn = document.querySelector(".openBtn");
const modal = document.querySelector(".modal");
// const modal_background = document.querySelector(".modal_background");
const closeBtn = document.querySelector(".closeBtn");

displayModal = () => {
  modal.classList.toggle("hidden");
  console.log("modal");
};

openBtn.addEventListener("click", displayModal);
closeBtn.addEventListener("click", displayModal);
// modal_background.addEventListener("click", displayModal);
