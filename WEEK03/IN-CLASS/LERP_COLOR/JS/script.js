
function setup() {
  createCanvas(720, 400);
  background(255);
  noStroke();
}

function draw() {
  background(255);
  from = color(255, 0, 0, 0.2 * 255);
  to = color(0, 0, 255, 0.2 * 255);
  c1 = lerpColor(from, to, 0.33);
  c2 = lerpColor(from, to, 0.66);
  for (let i = 0; i < 15; i++) {
    fill(from);
    ellipse(random(width/2),0,random(width),random(height));
    fill(c1);
    ellipse(0,0,random(width),random(height)

    );
    fill(c2);

    ellipse(random(width),height,random(width),random(height));
    fill(to);
   ellipse(width,height,random(width),random(height));
  }
  frameRate(5);
  noLoop();
}
