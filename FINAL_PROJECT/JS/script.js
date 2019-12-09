// variables
let canvSize = 600;

function preload() {

}
function setup() {
  createCanvas(canvSize, canvSize);
  background(255);

  glass();
  let boolShape = random() < 0.5;

  if (boolShape) {
    // square
    sqrShape();

  }else {
    circShape();
  }


  // fan();

  // save('mySketch.jpg');

}

function glass() {

  let start = width/9;
  noStroke();
  colorMode(HSB);
  var colorVal = map(noise(random(0,220)), 0, 1, 0, 100);
  for (var i = 0; i < 5; i++) {
    fill(colorVal, 100, 80, (i*25)/100);
    beginShape();
      vertex(start, start+100);
      vertex(start+200, start+50);
      vertex(start+200-50, start+200-50);
      vertex(start-50, start+200);
    endShape();
    start += 40;
  }



}

// function fan() {
//   strokeWeight(3);
//   for (var i = 0; i < 8; i++) {
//     line(width/2, width/2, i+width/4+i*60, height/2-height/4);
//   }
// }



// x1, x2, y1, y2


// function ring() {
//   var xOff = 0;
//
//
//
//   while (xOff < 4) {
//     xOff += 1;
//
//     // A = pi * R ** 2
//     // ellipse(cos(end)*rad+circX, sin(end)*rad+circY, 20);
//
//     noiseSeq = noise(xOff);
//     console.log(xOff);
//     console.log(noise(xOff));
//     console.log(noiseSeq*width);
//     line(0, noiseSeq*height, noiseSeq*width, 20);
//
//   }
// }


function circShape() {

  stroke(0);
  // diameter
  var circShapeDia = 300;
  // radius
  var rad = circShapeDia/2;

  // angle arc stops
  var end = 2*PI-random(0.5,PI/2);

  // position
  var circX = random(width/2, width-rad-40);
  var circY = random(height/2, height-rad-40);

  strokeWeight(5);
  noFill();

  arc(circX, circY, circShapeDia, circShapeDia, 0, end);
  ellipse(cos(end)*rad+circX, sin(end)*rad+circY, 20);
}

function sqrShape() {
  colorMode(RGB);
  var x1;
  var x2;
  var x3;
  var x4;
  var x5;

  var y1;
  var y2;
  var y3;
  var y4;
  var y5;

  var boolNum = random()>0.5;

  // if boolNum evaluates True
  if (boolNum) {

    // vertical line
    // Point 1 & 2 have same x
    x1 = random(width/3, width - width/5);
    y1 = random(height/3, height/2-height/5);

    // ------------------
    x2 = x1;
    y2 = y1 + random(y1, y1+150);

    // ------------------
    // length of vertical base line
    var baseLength = y2 - y1;
    var midpoint = y1 + (y2-y1)/2;

    // ------------------
    // if starting point x1 is less than half the width
    if (x1 < width/2) {
      // plot x3 on the right
      x3 = random(width/2+width/5, width-width/5);

    }else {
      // plot x3 on the left
      x3 = random(width/5, width/2-width/5);

    }

    y3 = y2;
    // ------------------
    x4 = x3;
    y4 = y1;
    // ------------------
    x5 = x3;
    y5 = random(y4+50, y3-50);

  }else {
    // horizontal line
    // point 1 & 2 have same y
    y1 = random(height/5, height - height/5);
    x1 = random(width/5, width/2-width/5);

    // ------------------
    y2 = y1;
    x2 = x1+random(x1, x1+150);

    // ------------------
    x3 = x2;
    // if base y value is less than middle of height
    if (y1 < height/2) {
      // plot y3 down
      y3 = random(height/2+height/5, height-height/5);
    }else {
      // plot y3 up
      y3 = random(height/5, height/2-height/5);
    }

    // ------------------
    y4 = y3;
    x4 = x1;
    // ------------------
    y5 = y3;
    x5 = random(x4+50, x3-50);

  }

  // accent circle on square radius
  var radius = 20;

  // determines if circle connects to 3 or 4
  if (boolNum) {
    // connect to point 4
    noFill();
    strokeWeight(5);
    stroke(0);

    ellipse(x5, y5, radius);

    beginShape();
      vertex(x5, y5);
      vertex(x4, y4);
      vertex(x1, y1);
      vertex(x2, y2);
      vertex(x3, y3);
    endShape();
  }else {
    // connects to point 3
    noFill();
    strokeWeight(5);
    stroke(0);

    ellipse(x5, y5, radius);

    beginShape();
      vertex(x5, y5);
      vertex(x3, y3);
      vertex(x2, y2);
      vertex(x1, y1);
      vertex(x4, y4);
    endShape();

  }
}

function draw() {
  // ring();

  noLoop();
}
