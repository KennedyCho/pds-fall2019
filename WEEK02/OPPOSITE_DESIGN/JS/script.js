function setup() {
  createCanvas(500, 500);
  background(0);

  var w = width;
  var h = height;

  var w2 = width * 0.3;
  var h2 = height * 0.3;

  // balloon top
  //stroke('red');
  beginShape();
    vertex(w*1/10, h*3/10);
    vertex(w*2/10, h*2/10);
    vertex(w*2/10, h*3/10);
  endShape(CLOSE)

  // balloon
  //stroke('blue');
  beginShape();
    vertex(w*2/10, h*3/10);
    bezierVertex(w*2/10, h*5/10, w*2/10, h*9/10, w*6/10, h*6/10);
    bezierVertex(w*8/10, h*4/10, w*5/10, h*3/10, w*2/10, h*3/10);
  endShape(CLOSE)

  //break
  stroke('black');

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
    vertex(w*9/10,h*6/10);

  endShape();

//water drops
  stroke('grey');
  fill(255);
  beginShape();
    vertex(w*6/10, h*3/10);
    bezierVertex(width*10/15,0,  width*6/15,height*1/15  ,width*6/10,height*3/10);
  endShape();

  stroke('grey');
  fill(255);
  beginShape();
    vertex(w*7/10, h*3/10);
    bezierVertex(width*13/15,height*3/15,  width*12/15,height*1/15  ,width*7/10,height*3/10);
  endShape();

  stroke('grey');
  fill(255);
  beginShape();
    vertex(w*6.9/10, h*4.5/10);
    bezierVertex(width*15/15,height*5/15,  width*13/15,height*8/15  ,width*6.9/10,height*4.5/10);
  endShape();


  noLoop();





}
