let canvSize = 600;
function setup() {

  createCanvas(canvSize, canvSize);
  background('grey');

  fill(0);
  // ellipse(canvSize/2, canvSize/2, canvSize*0.7);

  // beginShape();
  // vertex(canvSize/4.5, canvSize/6);
  // bezierVertex(canvSize/6, canvSize-(canvSize*0.001), canvSize-canvSize/6, canvSize-(canvSize*0.001), canvSize-canvSize/4.5, canvSize/6);
  // endShape();
  // angleMode(DEGREES);
  // translate(-canvSize*0.6/2, -canvSize*0.6/2);
  // rotate(10);
  // rect(canvSize/2, canvSize/2, canvSize*0.6, canvSize*0.6, 20);

  angleMode(DEGREES);
  rotate(PI);
  translate(-canvSize*0.6/2, -canvSize*0.6/2);

  rect(canvSize/2,canvSize/2, canvSize*0.6, canvSize*0.6, 20);
}



function draw() {

}
