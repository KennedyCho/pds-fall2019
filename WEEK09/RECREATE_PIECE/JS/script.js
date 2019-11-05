var xoff = 0;

function setup() {
  let canvSize = 600;
  createCanvas(canvSize, canvSize)
  background(255, 219, 172);
}
function draw() {
  // noiseDetail(200);
  background(255, 219, 172);
  stroke(0);
  noFill();
  beginShape();
  // var x = map(noise(xoff), 0, 1, 0, width);
  for (var i = 0; i < width; i++) {
    // var y = map(noise(0), 0, 1, 0, height);
    var y = map(noise(xoff), 0, 1, 0, width/5);
    line(y, i*5, width -y, i*5);
    xoff += 0.1;
  }

  for (var i = 0; i < 21; i++) {
    stroke(100);
    line(i*20 + width/6, 0, i*20 + width/6, height);
  }

  endShape();
  noLoop();



}
