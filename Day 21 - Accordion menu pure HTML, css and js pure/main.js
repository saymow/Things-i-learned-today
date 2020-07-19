const topicBarsEl = document.querySelectorAll(".topic-bar");

topicBarsEl.forEach((item) =>
  item.addEventListener("click", (event) => {
    const contentEl = event.target.nextElementSibling;
    contentEl.classList.toggle("show-content");
  })
);
