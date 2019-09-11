function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  strokeWeight(5);


noStroke();
//strokeWeight(1);
  fill(155,0,0);
beginShape();
vertex(0, width/2);
quadraticVertex(width/2, -width/2, width, width/2);
endShape();
}
