let time = 1000,
  currentImageIndex = 0,
  images = document.querySelectorAll("img"),
  max = images.length - 1;

function nextImage() {
  images[currentImageIndex].classList.remove("selected");

  if (currentImageIndex === max) 
    currentImageIndex = 0;
  else currentImageIndex++;

  images[currentImageIndex].classList.add("selected");
}

(function start() {
  setInterval(() => {
    nextImage();
  }, time);
})();
