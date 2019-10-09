let font
fontsize = 40;

function preload(){
font = loadFont('ASSETS/ComicNeueSansID.ttf');
}
function setup() {
  createCanvas(600, 600);
  textFont(font);
  fill(50);
  textSize(60);
}

function draw() {

  background(255);
  let line1 = 'he was ';
  let bis = 'biscuits';
  let line2 = 'but I was';
  let line3 = 'not';
  let line4 = 'gravy';

  text(line1, width/9,  height/6, 600, 100);

  textSize(80);
  text(bis, width/3 + width/6, height/8, 600, 100);
  textSize(60);
  text(line2, width/3, height-height/1.5, 600, 200);

  text(line3, width/2, height-height/2, 600, 300);

  var xPos = width - (width/2.5);
  var yPos = height-height/2.8;



  for (i=0; i<line4.length; i++){
    textSize(70);
    text(line4[i], xPos+i*45, yPos+i*25, 200, 200);
  }

  noLoop();
}
