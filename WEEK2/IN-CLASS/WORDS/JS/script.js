let x, y;

function setup() {
  createCanvas(400, 400);
  // Starts in the middle
  x = width / 2;
  y = height;
}

function draw() {
  translate(-50, 50);
  background(200);

  // Draw a rectangle
  noStroke();
  fill(0, 102, 204);
  rect( x+130, 230, 100, 100);

  // shiver
  x = x + random(-1, 1);
}
