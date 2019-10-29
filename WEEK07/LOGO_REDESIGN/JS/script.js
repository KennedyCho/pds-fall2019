let canvSize = 600;
function setup() {

  createCanvas(canvSize, canvSize);
  background('grey');
  fill(0);

  // // circle
  // ellipse(canvSize/2, canvSize/2, canvSize*0.7);
  // fill(255);
  // ellipse(canvSize/2, canvSize/2, canvSize*0.65);




  // diamond
  // angleMode(RADIANS);
  // rectMode(CENTER);
  // translate(canvSize/2, canvSize/2);
  // rotate(sin(PI/3.5));
  // rect(0,0, canvSize*0.6, canvSize*0.6, canvSize/30);
  // fill(255);
  // rect(0,0, canvSize*0.55, canvSize*0.55, canvSize/30);

  // // triangle
  // strokeWeight(12.0);
  // strokeCap(ROUND);
  // line(canvSize/2, canvSize/6, canvSize/9, canvSize-canvSize/6);
  // line(canvSize/2, canvSize/6, canvSize-canvSize/9, canvSize-canvSize/6);
  // line(canvSize/9, canvSize-canvSize/6, canvSize-canvSize/9, canvSize-canvSize/6);
  // triangle(canvSize/2, canvSize/4, canvSize/5, canvSize-canvSize/4.6, canvSize-canvSize/5, canvSize-canvSize/4.6);

  // chevron
  // translate(canvSize/2, canvSize/2);
  // triangle(0, 0, canvSize-canvSize/2, -canvSize/2, canvSize-canvSize/2, -canvSize/3);
  // // triangle(0, 75, 58, 20, 86, 75);


  // orbit
  // translate(canvSize/2, canvSize/2);
  // stroke(255, 0, 0);
  // beginShape();
  // // Exterior part of shape, clockwise winding
  // vertex(-canvSize/5, -canvSize/9);
  // quadraticVertex(-canvSize/4, -canvSize/4, 0, 0);
  // // Interior part of shape, counter-clockwise winding
  // // beginContour();
  // // vertex(-20, -20);
  // // vertex(-20, 20);
  // // vertex(20, 20);
  // // vertex(20, -20);
  // // endContour();
  // endShape(CLOSE);

  // cestial body right shadow
  // ellipse(canvSize/2, canvSize/2, canvSize*0.7/3);
  // fill(255);
  // ellipse(canvSize/1.97, canvSize/2, canvSize*0.65/3.1, canvSize*0.65/3);

  // cestial body left shadow
  // ellipse(canvSize/2, canvSize/2, canvSize*0.7/3);
  // fill(255);
  // ellipse(canvSize/2.029, canvSize/2, canvSize*0.65/3.1, canvSize*0.65/3);

  // cut out
  //translate(canvSize/2, canvSize/2);


  // fill(255);
  // beginShape();
  // noStroke();
  // // Exterior part of shape, clockwise winding
  // vertex(0, 0);
  // vertex(0, canvSize);
  // vertex(canvSize, canvSize);
  // vertex(canvSize, 0);
  // // Interior part of shape, counter-clockwise winding
  // beginContour();
  // // stroke(255, 0, 0);
  // vertex(0, canvSize/2);
  // vertex(canvSize/2, 0);
  // vertex(canvSize, canvSize/2);
  // vertex(canvSize/2, canvSize);
  // endContour();
  // endShape(CLOSE);

  let weight = 1;
  // star
  fill(237, 34, 93);
  noStroke();
  beginShape();
  vertex(-10, 10);
  vertex(0, 35);
  vertex(10, 10);
  vertex(35, 0);
  vertex(10, -8);
  vertex(0, -35);
  vertex(-10, -8);
  vertex(-35, 0);
  endShape();



}



function draw() {

}
