function setup() {
  createCanvas(600, 600);
  background('black');

  var x = width * 0.7;
  var y =  height * 0.7;

  for (i=0; i < 4; i++){
    console.log(i + 1);
    noStroke();
    //stroke('black');
    //strokeWeight(2);
    colorMode(HSB);
    fill(7+(i*10), 76+(i*10), 82+(i*10));
    ellipse(x/i, height/2, x/i, y/i);

  }




}
