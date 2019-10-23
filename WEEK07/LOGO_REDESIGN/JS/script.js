let canvSize = 600;
function setup() {

  createCanvas(canvSize, canvSize);
  background('grey');

  fill(0);
  // ellipse(canvSize/2, canvSize/2, canvSize*0.7);

  beginShape();
  vertex(canvSize/5, canvSize/6);
  bezierVertex(canvSize/9, canvSize-canvSize/20, canvSize-canvSize/9, canvSize-(canvSize/20), canvSize-canvSize/5, canvSize/6);
  endShape();
}



function draw() {
  
