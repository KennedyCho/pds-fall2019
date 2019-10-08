function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  let line1 = 'he was biscuits';
  let line2 = 'but I was';
  let line3 = 'not';
  let line4 = 'gravy';

  fill(50);
  textSize(60);
  textFont('Helvetica');
  text(line1, width/9,  height/6, 600, 100); // Text wraps within text box

  fill(50);
  textSize(60);
  textFont('Helvetica');
  text(line2, width/3, height-height/1.5, 600, 200); // Text wraps within text box

  fill(50);
  textSize(60);
  textFont('Helvetica');
  text(line3, width/2, height-height/2, 600, 300); // Text wraps within text box

  fill(50);
  textSize(70);
  textFont('Helvetica');
  text(line4, width-(width/2.5), height-height/3, 400, 400); // Text wraps within text box

  noLoop();
}
