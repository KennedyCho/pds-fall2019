// variables
let canvSize = 600;
let circleW = canvSize/2;;
let radius = circleW/2;

function preload() {

}

function setup() {
  createCanvas(canvSize, canvSize);
  background(200);

  fill(255, 0, 0);
  ellipse(canvSize/2, canvSize/2, circleW);

  fill('blue');
  translate(canvSize/2, canvSize/2);
  ellipse(0, 0, 10);

  fill('blue');
  ellipse(radius, 0, 10);



}

function draw() {

}
