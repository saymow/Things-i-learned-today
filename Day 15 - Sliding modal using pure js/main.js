const modal = document.querySelector(".modal");
const backDrop = document.querySelector(".back-drop");
const button = document.querySelector("button");

backDrop.addEventListener("click", () => {
  modal.classList.remove("show");
})

button.onclick = () => {
  console.log(modal, button);
  modal.classList.add("show");
};
