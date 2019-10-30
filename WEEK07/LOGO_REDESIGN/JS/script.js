let canvSize = 800;
let patchValue = 0;

let weight = 1;

// blue  fill(25, 81, 162);
// orange  fill(247, 0, 0);
// red fill(143, 0, 23);
// yellow fill(255, 147, 0);

function preload() {
  primFont = loadFont('ASSETS/Nasa.ttf');
}


function setup() {

  createCanvas(canvSize, canvSize);
  background('white');
  fill(0);

}
let decorType = ['planet', 'orbit', 'star'];

function mouseClicked(event) {


  let shapeValue = random(decorType.length + 1);
  console.log(shapeValue);

  let missionNames = ['APOLLO', 'ARTEMIS', 'ORION']
  var randMissionName = random(missionNames);
  console.log(randMissionName);

  // console.log(event);

  background('white');
  if (patchValue == 0) {




    for (var i = 0; i < 4; i++) {
      noStroke();
      colorMode(RGB);
      if (i == 0) {
        fill(25, 81, 162);
      }else if (i == 1) {
        fill(247, 0, 0);
      }else if (i == 2) {
        fill(143, 0, 23);
      }else if (i == 3) {
        fill(255, 147, 0);
      }
      rect(canvSize/3 + i*20,0,10, canvSize);
    }

    decorShape(shapeValue);

    // diamond
    fill(255);
    beginShape();
    noStroke();
    // Exterior part of shape, clockwise winding
    vertex(0, 0);
    vertex(0, canvSize);
    vertex(canvSize, canvSize);
    vertex(canvSize, 0);
    // Interior part of shape, counter-clockwise winding
    beginContour();
    // stroke(255, 0, 0);
    vertex(0, canvSize/2);
    vertex(canvSize/2, 0);
    vertex(canvSize, canvSize/2);
    vertex(canvSize/2, canvSize);
    endContour();
    endShape(CLOSE);

    noFill();
    stroke(0);
    strokeWeight(12.0);
    strokeCap(ROUND);
    line(canvSize/2, canvSize/90, canvSize/90, canvSize/2);
    line(canvSize/90, canvSize/2, canvSize/2, canvSize-canvSize/90);
    line(canvSize/2, canvSize-canvSize/90, canvSize-canvSize/90, canvSize/2);
    line(canvSize-canvSize/90, canvSize/2, canvSize/2, canvSize/90);


    fill(0);
    textFont(primFont);
    strokeWeight(1);
    textSize(canvSize/10);
    translate(canvSize/2, canvSize/2+canvSize/25);
    text(randMissionName, 0, 0);


    // return back to normal origin
    translate(-canvSize/2, -(canvSize/2+canvSize/25));



    // change patch value
    patchValue = 1;
    console.log(patchValue);
  }else if (patchValue == 1) {
    // circle
    fill(0);
    ellipse(canvSize/2, canvSize/2, canvSize*0.9);
    fill(250, random(150, 200), random(50));
    ellipse(canvSize/2, canvSize/2, canvSize*0.85);


    // text
    fill(0);
    textFont(primFont);
    strokeWeight(1);
    textSize(canvSize/10);
    translate(canvSize/2, canvSize/2+canvSize/25);
    text(randMissionName, 0, 0);


    // return back to normal origin
    translate(-canvSize/2, -(canvSize/2+canvSize/25));

    // add decor shape
    decorShape(shapeValue);



    patchValue = 2;
  }else if (patchValue == 2) {


    // triangle
    fill(255);
    triangle(canvSize/2, canvSize/50, canvSize/50, canvSize-canvSize/50, canvSize-canvSize/50, canvSize-canvSize/50);

    for (var i = 0; i < 10; i++) {


      colorMode(HSB);
      noStroke();
      fill(2, random(50, 100), random(80, 100));
      triangle((canvSize/2) - i*15, canvSize/50 + i*30, canvSize/50, canvSize-canvSize/50, canvSize-canvSize/50 - i*30, canvSize-canvSize/50 );


    }

    stroke(0);
    strokeWeight(12.0);
    strokeCap(ROUND);
    line(canvSize/2, canvSize/45, canvSize/45, canvSize-canvSize/45);
    line(canvSize/2, canvSize/45, canvSize-canvSize/45, canvSize-canvSize/45);
    line(canvSize/45, canvSize-canvSize/45, canvSize-canvSize/45, canvSize-canvSize/45);



    fill(0);
    textFont(primFont);
    strokeWeight(1);
    textSize(canvSize/10);
    translate(canvSize/2, canvSize- canvSize/9);
    text(randMissionName, 0, 0);


    // return back to normal origin
    translate(-canvSize/2, -(canvSize- canvSize/9));

    decorShape(shapeValue);

    patchValue = 0;
  }
}

function accentShape() {

}
function decorShape(shapeValue) {
  if (shapeValue < decorType.length - (decorType.length - 1)) {
    console.log('first!');
    // cestial body left shadow
    for (var i = 0; i < 4; i++) {
      fill(0);
      ellipse((canvSize/2)-i*50, (canvSize/2)+i*50, (canvSize*0.7/3) * i/3);
      colorMode(RGB);
      if (i == 3) {
        fill(25, 81, 162);
      }else if (i == 2) {
        fill(247, 0, 0);
      }else if (i == 1) {
        fill(143, 0, 23);
      }else if (i == 0) {
        fill(255, 147, 0);
      }
      // fill(255);
      ellipse((canvSize/2.029)-i*50, (canvSize/2)+i*50, canvSize*0.65/3.1*i/3, (canvSize*0.65/3)*i/3);
    }
  }else if (shapeValue < decorType.length - (decorType.length - 2)) {
    console.log('seconf!');
    for (var i = 0; i < 4; i++) {
      var movementXWeight = random(3);
      var movementWeight = random(3);
      var sizeWeight = random(0.5, 1);
      // star
      fill(0);
      noStroke();
      beginShape();
      vertex((-10+canvSize/movementXWeight) * sizeWeight, (10+canvSize/movementWeight)*sizeWeight);
      vertex((0+canvSize/movementXWeight)*sizeWeight, (35+canvSize/movementWeight)*sizeWeight);
      vertex((10+canvSize/movementXWeight)*sizeWeight, (10+canvSize/movementWeight)*sizeWeight);
      vertex((35+canvSize/movementXWeight)*sizeWeight, (0+canvSize/movementWeight)*sizeWeight);
      vertex((10+canvSize/movementXWeight)*sizeWeight, (-8+canvSize/movementWeight)*sizeWeight);
      vertex((0+canvSize/movementXWeight)*sizeWeight, (-35+canvSize/movementWeight)*sizeWeight);
      vertex((-10+canvSize/movementXWeight)*sizeWeight, (-8+canvSize/movementWeight)*sizeWeight);
      vertex((-35+canvSize/movementXWeight)*sizeWeight, (0+canvSize/movementWeight)*sizeWeight);
      endShape();
    }



  }else {
    console.log('final');

    for (let i = 0; i < 200; i += 20) {
    noFill();
    strokeWeight(2);
    bezier(
      (canvSize/4 - i / 2.0)+50,
      40 + i + 50,
      (canvSize/1.9)+50,
      canvSize/40 + 50,
      (canvSize/1.8)+50,
      canvSize/2 + 50,
      (canvSize/3 - i / 16.0)+50, (canvSize/2 + i / 8.0)+50);
    }
    fill(0);
    ellipse((canvSize/2)-canvSize/9, (canvSize/2)+canvSize/9, (canvSize*0.7/3) );
    fill(random(50), random(150),164);
    ellipse((canvSize/2.029)-canvSize/9, (canvSize/2)+canvSize/9, canvSize*0.65/3.1, (canvSize*0.65/3));
  }
}
