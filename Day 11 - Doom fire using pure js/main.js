const debug = false;
const firePixelsArray = [];
const fireWidth = 60;
const fireHeight = 60;
const fireColorsPalette = [
  { r: 7, g: 7, b: 7 },
  { r: 31, g: 7, b: 7 },
  { r: 47, g: 15, b: 7 },
  { r: 71, g: 15, b: 7 },
  { r: 87, g: 23, b: 7 },
  { r: 103, g: 31, b: 7 },
  { r: 119, g: 31, b: 7 },
  { r: 143, g: 39, b: 7 },
  { r: 159, g: 47, b: 7 },
  { r: 175, g: 63, b: 7 },
  { r: 191, g: 71, b: 7 },
  { r: 199, g: 71, b: 7 },
  { r: 223, g: 79, b: 7 },
  { r: 223, g: 87, b: 7 },
  { r: 223, g: 87, b: 7 },
  { r: 215, g: 95, b: 7 },
  { r: 215, g: 95, b: 7 },
  { r: 215, g: 103, b: 15 },
  { r: 207, g: 111, b: 15 },
  { r: 207, g: 119, b: 15 },
  { r: 207, g: 127, b: 15 },
  { r: 207, g: 135, b: 23 },
  { r: 199, g: 135, b: 23 },
  { r: 199, g: 143, b: 23 },
  { r: 199, g: 151, b: 31 },
  { r: 191, g: 159, b: 31 },
  { r: 191, g: 159, b: 31 },
  { r: 191, g: 167, b: 39 },
  { r: 191, g: 167, b: 39 },
  { r: 191, g: 175, b: 47 },
  { r: 183, g: 175, b: 47 },
  { r: 183, g: 183, b: 47 },
  { r: 183, g: 183, b: 55 },
  { r: 207, g: 207, b: 111 },
  { r: 223, g: 223, b: 159 },
  { r: 239, g: 239, b: 199 },
  { r: 255, g: 255, b: 255 },
];

function start() {
  createFireDateStructure();
  createFireSource();
  renderFire();

  setInterval(() => {
    calculateFirePropagation();
  }, 50);
}

function createFireDateStructure() {
  const pixelsNumber = fireWidth * fireHeight;

  for (let i = 0; i < pixelsNumber; i++) {
    firePixelsArray[i] = 0;
  }
}

function calculateFirePropagation() {
  for (let column = 0; column < fireWidth; column++) {
    for (let row = 0; row < fireHeight; row++) {
      const pixelIndex = fireWidth * row + column;
      // console.log(pixelIndex);

      updateFireInstensity(pixelIndex);
    }
  }

  renderFire();
}

function updateFireInstensity(pixelIndex) {
  const belowPixelIndex = pixelIndex + fireWidth;

  if (belowPixelIndex >= fireWidth * fireHeight) return;

  const decay = Math.round(Math.random() * 2);
  const belowPixelIntensity = firePixelsArray[belowPixelIndex];
  const newFireIntensity =
    belowPixelIntensity - decay >= 0 ? belowPixelIntensity - decay : 0;

  firePixelsArray[pixelIndex + decay] = newFireIntensity;
}

function renderFire() {
  let canvas = document.querySelector("#fireCanvas");
  let html = "<table cellpadding=0 cellspacing=0>";

  for (let row = 0; row < fireHeight; row++) {
    html += "<tr>";

    for (let column = 0; column < fireWidth; column++) {
      const index = row * fireWidth + column;
      const fireIntesity = firePixelsArray[index];

      if (debug) {
        html += "<td>";
        html += `<span class="pixel-index">${index}</span>`;
        html += fireIntesity;
      } else {
        const color = fireColorsPalette[fireIntesity];
        const colorString = `${color.r}, ${color.g}, ${color.b}`;
        html += `<td class="pixel" style="background-color: rgb(${colorString})"`;
      }

      html += "</td>";
    }

    html += "</tr>";
  }

  html += "</table>";
  canvas.innerHTML = html;
}

function createFireSource() {
  const overflowPixelIndex = fireWidth * fireHeight;

  for (let column = 0; column <= fireWidth; column++) {
    const pixelIndex = overflowPixelIndex - fireWidth + column;

    firePixelsArray[pixelIndex] = 36;
  }
}

start();
