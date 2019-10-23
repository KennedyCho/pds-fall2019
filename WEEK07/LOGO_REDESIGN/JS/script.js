function setup() {
  createCanvas(500, 500);
  background(220);
  circGrid(3);

}

function circGrid(numOfCirc) {
  translate(width/5, 0);
  for (i=0; i < numOfCirc; i++){
    console.log(i);

    fill('red');
    ellipse(i*120, height/2, 100);
  }
}


function draw() {

}
