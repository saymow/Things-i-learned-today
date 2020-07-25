const dotsEl = document.querySelectorAll(".dot");
const barsEl = document.querySelectorAll(".bar");
let dotsQntd = dotsEl.length - 1,
  barsQntd = barsEl.length - 1,
  dotIndex = 0,
  barsIndex = 0;

(function triggerAnimation() {
  setInterval(() => {
    animateDots();
    animateBars();
  }, 200);
})();

function animateDots() {
  dotsEl[dotIndex].classList.remove("dot-effect");
  if (dotIndex > dotsQntd - 1) dotIndex = 0;
  else dotIndex++;
  dotsEl[dotIndex].classList.add("dot-effect");
}

function animateBars() {
  barsEl[barsIndex].classList.remove("bar-effect");
  if (barsIndex > barsQntd - 1) barsIndex = 0;
  else barsIndex++;
  barsEl[barsIndex].classList.add("bar-effect");
}
