function setup() {
  createCanvas(500, 500);
  background(255);

  //stroke(255,0,0);
  //line(width/2, 0, width/2, height);
  //line(0, height/2, width, height/2);
  //line(width/4, 0, width/4, height);
  //line(3 * width/4, 0, 3 * width/4, height);

  //translate(width/2, height/2);

  //stroke(123,104,238);


  fill(0);
  ellipse(width/2,width/4,width/2.1,height/2);

  noStroke();
  fill(255);
  rect(0, height/4.1, width, height);

  //stroke(0,191,255);

  fill(0);

  triangle(width/3.78, height/4, width/2, height/1.93,3 * width/4.1,height/4);


  //triangle(x1, y1, x2, y2, x3, y3)
  triangle(width - width/2.6, height - height/2.9, width - width/2, height/1.9, width - width/4, height/4);

  triangle(width/4, height/4, width/2, height, height - height/2.6, height - height/3);


}
