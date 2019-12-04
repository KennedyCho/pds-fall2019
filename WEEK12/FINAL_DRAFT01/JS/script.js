// variables
let canvSize = 600;

function preload() {

}
var y = 10;
function setup() {
  createCanvas(canvSize, canvSize);
  background(200);




  // console.log(noiseSeq01);
  // function pattern(y) {
  //   if (9 < y < 20) {
  //     line(noiseSeq01, y, noiseSeq01+100, y);
  //     pattern(y + 1);
  //   }
  // }
  //
  // pattern(y);
}
var step01 = 0;
var step02 = step01*100;
var startOct = 10;

function draw() {
  frameRate(1);

  strokeWeight(1);
  fill(0);
  // beginShape();
  //   vertex(startOct, startOct);
  //   vertex(startOct + 10, startOct);
  //   vertex(50, 20);
  //   vertex(50, 40);
  //   vertex(20, 60);
  //   vertex(10, 60);
  //   vertex(5, 40);
  //   // vertex();
  // endShape();

  let noiseSeq01 = map(noise(step01), 0, 1, width/3, width-width/3) ;
  // let noiseSeq02 = map(noise(step02), 0, 1, 0, 10);

  var ranNum = random(4,5);
  var leftStep = random(height/3, height-height/4);
  var rightStep = random(height/3, height-height/4);
  var lineSpacing = 12;
  strokeWeight(4);

  for (var i = 0; i < ranNum+1; i++) {
    line(noiseSeq01, i*lineSpacing+leftStep, noiseSeq01+100, i*lineSpacing+rightStep);
    step02 += 1;
    step01 += 1;
  }
  // step01 += 1;

  if (frameCount == 3) {
    noLoop();
  }

}
