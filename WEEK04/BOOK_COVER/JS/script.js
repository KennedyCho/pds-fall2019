
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);


  var xPos = width/35;
  var yPos = height/15;
  bookCover(xPos, yPos);

  ticket(xPos, yPos);

}


function bookCover(xPos, yPos) {


  for (i=0; i<2; i++){
    console.log(i);
    fill(255);
    rect(xPos, yPos, 370, 550);
    noStroke();
    fill(random(100,200), 255, random(120, 255));

    rect(xPos+20, yPos+20, 370-40, 550-40);
    var xPos = xPos*10;

  }




}

function ticket(xPos, yPos){
  var x = xPos;
  var y = yPos;
  //stroke(0);
  fill('gold');
  rect(xPos, yPos, 250, 120);

  triangle(x, y, xPos-10, yPos, xPos, yPos+10);
  triangle(x+250, yPos, (xPos+10)+250, yPos, xPos+250, yPos+10);

  for (i=0; i<10; i++){

    triangle(x, y+5, x-10, y+10, x, y+15);
    triangle(x+250, y+5, (x+10)+250, y+10, x+250, y+15);

    var y = y + 10;
  }

  triangle(x, y+15, x-10, y+15, x, y+5);
  triangle(x+250, y+15, (x+10)+250, y+15, x+250, y+5);




}
