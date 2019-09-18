
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
  rect(0,0,random(width),random(height));
  fill(c1);
  rect(180,0,random(width),random(height)

  );
  fill(c2);

  rect(360,0,random(width),random(height));
  fill(to);
 rect(540,0,random(width),random(height));
}
frameRate(5);
}
