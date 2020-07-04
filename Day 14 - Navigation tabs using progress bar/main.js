const progressBar = document.querySelector("#progress-bar");
const progressMock = document.querySelector("#progress-mock");
const contentPages = document.querySelectorAll(".content");
const previousButtton = document.querySelector(".previous");
const nextButtton = document.querySelector(".next");
const rounderedCheckPointsList = [];
let pagesIndex = 0;

progressBar.style.width = `${((pagesIndex + 1) / contentPages.length) * 100}%`;

function switchContentIndex(index) {
  if (index > contentPages.length - 1) {
    return;
  } else if (index < 0) {
    return;
  } else {
    contentPages[pagesIndex].classList.remove("appear");
    rounderedCheckPointsList[pagesIndex].classList.remove("appear");
    pagesIndex = index;
  }

  let progressPercentage = ((pagesIndex + 1) / contentPages.length) * 100;

  progressBar.style.width = `${progressPercentage}%`;

  contentPages[pagesIndex].classList.add("appear");
  rounderedCheckPointsList[pagesIndex].classList.add("appear");
}

function loadCheckpoints() {
  let checkPointsQntd = contentPages.length;
  let minimalPercentage = 1 / checkPointsQntd;

  for (
    let percentage = minimalPercentage;
    percentage <= 1;
    percentage += minimalPercentage
  ) {
    let RounderedCheckPoint = document.createElement("div");
    RounderedCheckPoint.classList.add("rounderedCheckPoint");
    RounderedCheckPoint.style.left = `calc(${percentage * 100}% - 20px)`;
    rounderedCheckPointsList.push(RounderedCheckPoint);
    progressMock.appendChild(RounderedCheckPoint);
  }

  rounderedCheckPointsList[pagesIndex].classList.add("appear");
}

loadCheckpoints();

nextButtton.onclick = () => {
  return switchContentIndex(pagesIndex + 1);
};

previousButtton.onclick = () => {
  return switchContentIndex(pagesIndex - 1);
};

