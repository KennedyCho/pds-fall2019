// establish varible to hold video feed
let capture;

function setup() {
  // create canvas
  createCanvas(320, 240);
  // assign var capture to the video feed
     capture = createCapture(VIDEO);
     // I don't understand this line
     capture.size(320, 240);
     // does this line make it look at the video feed cont?
     capture.loop();
     // makes so the video feed isn't shown
     capture.hide();

  noStroke();
  fill(0);
}

function draw() {
  background(255);

  // loads the pixels in the video feed
  capture.loadPixels();
  // gets r position in pixel array (r,g,b,a)
  // rounds number between 6-32
  const stepSize = round(constrain(mouseX / 8, 6, 32));

  // iterates through y values
  for (let y = 0; y < height; y += stepSize) {
    // iterates through x values
    for (let x = 0; x < width; x += stepSize) {

      // gets position
      const i = y * width + x;

      const darkness = (255 - capture.pixels[i * 4]) / 255;
      // console.log(capture.pixels[i*4])
      const radius = stepSize * darkness;
      ellipse(x, y, radius, radius);
    }
  }
}
