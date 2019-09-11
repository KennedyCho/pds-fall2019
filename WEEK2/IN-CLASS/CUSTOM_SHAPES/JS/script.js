
function setup() {

  let canvasWidth = 400;
  let canvasHeight = 400;

  createCanvas(canvasWidth, canvasHeight);

  // for (i = 0; i < canvasWidth; i+=10){
  //   line(i, 0, i, canvasHeight);


  }
}

function draw() {
  background(220);
  strokeWeight(5);



noStroke();
//strokeWeight(1);
  fill(155,0,0);

  // //custom shape (basic arc) with quadraticVertex
  // beginShape();
  // // vertex(x, y)
  // // y = first anchor point
  // vertex(0, width/2);
  //
  // //quadraticVertex(a, b, c, d)
  // // a,b (x,y) = control point (@ the peak of the arc)
  // // c,d (x,y) = ending anchor point
  // quadraticVertex(width/2, -width/2, width, width/2);
  // endShape();

  // //personal example: upside down arc
  // beginShape();
  // vertex(width/4, width/4);
  // quadraticVertex(width/2, height, width - width/4, width/4);
  // endShape();


  // //custom shape with beziervertex
  // noFill();
  // beginShape();
  // fill(155,0,0);
  // // vertex(x, y)
  // // y = first anchor point
  // vertex(0, 200);
  // // in order: control point 1, control point 2, ending anchor point
  // bezierVertex(0, 200, 200, -200, 400, 200);
  // endShape();

  noFill();
  beginShape();
  fill(155, 0, 0);
  vertex(50, 50);
  bezierVertex(100, 200, 200, 300, 400, 200);
  endShape();




}
