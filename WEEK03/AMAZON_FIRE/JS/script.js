
function setup() {
  createCanvas(720, 400);
  background(255);
  noStroke();

  let x = random(0, width);
  let y = random(0, height);

  let x2 = random(0, width);
  let y2 = random(0, height);


  for (i=0; i < 50; i++){
    noFill();
    stroke(0);
    beginShape();
      line(i/x, i/y, i/x2, i/y2);
    endShape();

  }

}
