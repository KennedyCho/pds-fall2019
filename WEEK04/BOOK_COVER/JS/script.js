
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);


  var xPos = width/35;
  var yPos = height/15;
  bookCover(xPos, yPos);

  ticket(xPos, yPos);

  peach(xPos, yPos);


}


function bookCover(xPos, yPos) {


  for (i=0; i<2; i++){
    console.log(i);
    fill(255);
    rect(xPos, yPos, 370, 550);
    noStroke();
    fill(random(150, 250), random(125, 220), random(173, 228));

    rect(xPos+20, yPos+20, 370-40, 550-40);
    var xPos = xPos*10;

  }




}

function ticket(xPos, yPos){
  var xPos = xPos*11;
  var yPos = yPos*3.5;

  fill(63, 0, 15);
  rect(xPos, yPos, 250, 120);

  fill(255,215,0);
  rect(xPos, yPos, 250, 120);
  fill(218,165,32);
  rect(xPos+5, yPos+5, 240, 110);


  triangle(xPos, yPos, xPos-10, yPos, xPos, yPos+10);
  triangle(xPos+250, yPos, (xPos+10)+250, yPos, xPos+250, yPos+10);

  for (i=0; i<10; i++){

    triangle(xPos, yPos+10, xPos-10, yPos+15, xPos, yPos+20);
    triangle(xPos+250, yPos+10, (xPos+10)+250, yPos+15, xPos+250, yPos+20);

    var yPos = yPos + 10;
  }

  triangle(xPos, yPos+20, xPos-10, yPos+20, xPos, yPos+10);
  triangle(xPos+250, yPos+20, (xPos+10)+250, yPos+20, xPos+250, yPos+10);




}


function peach(xPos, yPos){
  var xPos = xPos*4;
  var yPos = yPos*4;
  fill(254, 149, 91);
  beginShape();
  vertex(xPos, yPos);
  bezierVertex(xPos+50, yPos-50, xPos+90, yPos+55, xPos, yPos+75);

  // bezierVertex(30, 75, 80, 75, 80, 0);
  endShape();

  beginShape();
  vertex(xPos, yPos);
  bezierVertex(xPos+5, yPos-50, xPos-100, yPos+20, xPos, yPos+75);
  endShape();

  // noFill();
  // strokeWeight(20);
  // stroke(255);
  // bezier(xPos, yPos, 0, yPos, 100, yPos, 100, yPos, 0, yPos, 100, yPos);

  fill(96, 153, 40);
  beginShape();
  vertex(xPos, yPos-10);
  bezierVertex(xPos+5, yPos-70, xPos+50, yPos+10, xPos, yPos-10);
  endShape();

}
