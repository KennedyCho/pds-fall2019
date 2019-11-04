function setup() {
  createCanvas(400, 400);
  background(155,155,155);

  let square = random(1) > 0.5;
  let circle = random(1) < 0.5;

  if(square){
    noStroke();
    fill(255,0,0);
    rectMode(CENTER);
    rect(width/2,height/2,200,200);

     }

  if(circle){
    noStroke();
    fill(0,255,0);
    ellipse(width/2,height/2,200,200);
  }
}
