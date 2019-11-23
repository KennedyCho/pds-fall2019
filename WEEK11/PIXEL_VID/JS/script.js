let capture;

let weight = 2;


function setup() {
  createCanvas(320 * weight, 240 * weight);
     capture = createCapture(VIDEO);
     capture.size(320 * weight, 240 * weight);
     capture.loop();
     capture.hide();
  noStroke();
  fill('blue');
}

function draw() {
  background(255);
  capture.loadPixels();
  // const stepSize = round(constrain(mouseY / 8, 6, 32));
  const stepSize = 10;
  for (let y = 0; y < height; y += stepSize) {
    for (let x = 0; x < width; x += stepSize) {
      const i = y * width + x;
      const darkness = (255 - capture.pixels[i * 4])/150;
      const radius = stepSize * darkness;
      rect(x, y, radius, radius);
    }
  }
}
