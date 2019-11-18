// create font variable
// let robotoLight;

let x;
let y;
let xPadding;
let yPadding;
let spacing;
let xMove;
let yMove;
let fontSize;
let radius;
let circleSize;
// < > { }

function preload(){
//   change value of variable
  robotoLight = loadFont('ASSETS/Roboto-Thin.ttf');

}

function setup() {
  createCanvas(400, 400);
  background(220);

  translate(width/2 ,height/2);

  angleMode(DEGREES);

  xPadding = 30;
  yPadding = 30;

  x = 0;
  y = 0;

  spacing = 2;

  xMove = 0;
  yMove = 0;

  fontSize = 30;
  radius = width-100;

  circleSize = width * 15;

  textFont(robotoLight);
  textSize(fontSize);
  textAlign(CENTER);


  drawSemiColon(x, y, radius, spacing, fontSize)

}


function drawSemiColon(x, y, radius, spacing, fontSize){

  console.log(cos(x));
  textSize(fontSize);
  fill(255-radius);
  text('O', cos(x) * radius, sin(y)* radius);

  if(x <= circleSize){

    drawSemiColon(x + spacing , y + spacing , radius - 0.1, spacing);


  }


}
