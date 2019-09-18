

function setup() {
  createCanvas(600, 500);
  fill(0);

  for(var i = 0; i < 10; i++) {
    rect(i * 105, 0, 100, 100);
  }

  translate(width/2, height/2);
  
  beginShape();
  for(var i = 0; i < 10; i++) {
    var x = random(-100, 100);
    var y = random(-100, 100);
    vertex(x, y);
  }
  endShape();

}
