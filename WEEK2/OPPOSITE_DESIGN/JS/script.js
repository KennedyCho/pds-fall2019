function setup() {
  createCanvas(500, 500);
  background(0);

  var w = width * 0.8;
  var h = height * 0.8;

  var w2 = width * 0.3;
  var h2 = height * 0.3;

  fill(255);
  noStroke();
  beginShape();
    vertex(width, 0);
    vertex(0, height);
    vertex(width, h);
    //vertex(0, h);
    beginContour();
      vertex(w2 * 0.3, h2 * 0.3);
      vertex(w2 * 0.5, h2 * 0.8);
      vertex(w2 * 0.8, h2 * 0.4);
    endContour();
  endShape();

  noLoop();





}
