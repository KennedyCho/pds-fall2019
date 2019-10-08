function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  let poem = ['he was', 'BISCUITS', 'but I was', 'not', 'gravy'];

  fill(50);
  textSize(30);
  textFont('Helvetica');
  text(poem, 10, 10, 170, 200); // Text wraps within text box
}
