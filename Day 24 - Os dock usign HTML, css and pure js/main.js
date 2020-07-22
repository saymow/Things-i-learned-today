const dockElements = document.querySelectorAll(".itemEl");

const addAnim = (index) => {
  if (index === 0)
    return dockElements[index + 1].classList.add("inherited-anim");
  else if (index === dockElements.length - 1)
    return dockElements[index - 1].classList.add("inherited-anim");

  dockElements[index - 1].classList.add("inherited-anim");
  dockElements[index + 1].classList.add("inherited-anim");
};

const removeAnim = (index) => {
  if (index === 0)
    return dockElements[index + 1].classList.remove("inherited-anim");
  else if (index === dockElements.length - 1)
    return dockElements[index - 1].classList.remove("inherited-anim");

  dockElements[index - 1].classList.remove("inherited-anim");
  dockElements[index + 1].classList.remove("inherited-anim");
};

dockElements.forEach((el, index) => {
  el.addEventListener("mouseenter", () => addAnim(index));
  el.addEventListener("mouseout", () => removeAnim(index));
});
