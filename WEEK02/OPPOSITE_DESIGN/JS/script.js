function setup() {
  createCanvas(500, 500);
  background(0);

  var w = width;
  var h = height;

  var w2 = width * 0.3;
  var h2 = height * 0.3;

  // balloon top
  stroke('red');
  beginShape();
    vertex(w*1/10, h*3/10);
    vertex(w*2/10, h*2/10);
    vertex(w*2/10, h*3/10);
  endShape(CLOSE)

  // balloon
  stroke('blue');
  beginShape();
    vertex(w*2/10, h*3/10);
    bezierVertex(w*2/10, h*5/10, w*2/10, h*9/10, w*6/10, h*6/10);
    bezierVertex(w*8/10, h*4/10, w*5/10, h*3/10, w*2/10, h*3/10);
  endShape(CLOSE)

  //water
  stroke('green');
  beginShape();
    fill(0);
    vertex(w*5.3/10,h*2.9/10);
    vertex(w*5.1/10,h*4/10);
    vertex(w*5.5/10,h*3.5/10);
    vertex(w*5.5/10,h*4.2/10);
    vertex(w*5.9/10,h*3.8/10);
    vertex(w*5.7/10,h*4.5/10);
    vertex(w*6.4/10,h*4.2/10);
    vertex(w*5.8/10,h*5/10);
    vertex(w*8/10,h*4.6/10);

  endShape();



  noLoop();





}
