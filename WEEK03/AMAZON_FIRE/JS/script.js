function setup() {
  createCanvas(600, 600);
  background(255);

  stroke('red');
  beginShape();
    vertex(w*1/10, h*3/10);
    vertex(w*2/10, h*2/10);
    vertex(w*2/10, h*3/10);
  endShape(CLOSE)

}
