var body = document.body;
const button = document.querySelector("#menu-button");
const menu = document.querySelector("#nav-wrap");
const burger = document.querySelector("#menu-button svg");

button.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  body.classList.toggle("overflow-hidden");
});
