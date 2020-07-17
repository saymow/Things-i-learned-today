const navEl = document.querySelector("nav");
const toggleNavEl = document.querySelector(".open-nav-toggle");
const containerEl = document.querySelector("#container");
containerEl.innerHTML = containerEl.innerHTML.repeat(50);

toggleNavEl.onclick = () => {
  navEl.classList.toggle("show-nav");
};
