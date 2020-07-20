const wordsEl = document.querySelectorAll(".rotating-word"),
  time = 4000;
let currentIndex = 0,
  maxIndex = wordsEl.length - 1;

const nextWord = () => {
  wordsEl[currentIndex].classList.remove("show-word");

  if (currentIndex === maxIndex) currentIndex = 0;
  else currentIndex++;

  wordsEl[currentIndex].classList.add("show-word");
};

(function start() {
  setInterval(() => {
    nextWord();
  }, time);
})();

