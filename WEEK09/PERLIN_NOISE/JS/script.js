var xoff = 0;

function setup() {
  let canvSize = 600;
  createCanvas(canvSize, canvSize)
  background(255, 219, 172);
  frameRate(10);
}
function draw() {
  noStroke();
  background(0);
  fill(random(255),random(255), 255);
  beginShape();

  var x1 = width * noise(xoff + 15);
  var x2 = width * noise( + 25);
  var x3 = width * noise(xoff + 35);
  var x4 = width * noise(xoff + 45);
  var y1 = height * noise(xoff + 55);
  var y2 = height * noise(xoff + 65);
  var y3 = height * noise(xoff + 75);
  var y4 = height * noise(xoff + 85)


  vertex(x1, y1);
  vertex(x2, y2);
  vertex(x3, y3);
  vertex(x4, y4);


  xoff += 0.3;

  endShape();
  // noLoop();


}
