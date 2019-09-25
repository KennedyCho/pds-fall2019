
function setup() {
  // 2480 X 3508 pixels
  createCanvas(2480/5, 3508/5);
  background('grey');

  colorMode(HSB);

  for (i=0; i<10000; i++){
    let leafX = random(0, width);
    let leafSize = random(5, 30);
    let leafY = random(100, 800);
    let leafWidth = random(5, 40)
    let leafColorSat = random(5, 100);
    noStroke();
    fill(104, leafColorSat, 41);
    ellipse(leafX, leafY, leafWidth, leafSize);

  }



  for (i=0; i<150; i++){
    let positionX = random(0, width);
    let flameHeight = random(10, 700);
    let colorSat = random(5, 100);
    noStroke();
    fill(19, colorSat, 72);
    ellipse(positionX, height, 40, flameHeight);
  }


}
