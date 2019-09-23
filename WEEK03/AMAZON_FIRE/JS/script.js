function setup() {
  createCanvas(600, 600);
  background(0);

  let w = width;
  let h = height;

  stroke('red');
  strokeWeight(5);
  strokeCap(ROUND);
  beginShape();
    vertex(w*1/10, h*1/10);
    bezierVertex(w*2/10, h*5/10, w*3/10, h*4/10, w*4/10, h*3/10, w*6/10, h*5/10, w*9/10, h*9/10);

  endShape(CLOSE)

}
