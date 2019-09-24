function setup() {
  createCanvas(500, 500);
  background(255);

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

  //break
  stroke('green');
  beginShape();
    fill(255);
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

  // water
  stroke('grey');
  noFill();
  beginShape();
    vertex(w*5.3/10, h*3/10);
    bezierVertex(width*8/24,height*1/32,  width*8/24,height*17/32  ,width*9/24,height*17/32);
    bezierVertex(width*10/24,height*1/32,  width*11/24,height*17/32  ,width*10/24,height*17/32);
    bezierVertex(width*11/24,height*1/32,  width*12/24,height*17/32  ,width*11/24,height*17/32);
    bezierVertex(width*12/24,height*1/32,  width*13/24,height*17/32  ,width*12/24,height*17/32);
    //vertex(w*6/10, h*6/10);

  endShape();


  noLoop();





}
