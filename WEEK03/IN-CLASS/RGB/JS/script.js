
function setup() {


  createCanvas(500, 500);

  var w = width * 0.5;
  var h = height * 0.5;

  stroke('red');
  rect(0, 0, width, height);


  for (i=0; i < 5; i++){

    noStroke();

    colorMode(HSB, 100, 100, 100);
    fill(90, 100, 100);
    ellipse(w+(i*2), h+(i*2), 200, 200)
  }




}
