let canvSize = 600;

function setup() {


  createCanvas(canvSize, canvSize);
}

function draw() {
  background(220);

  for (i=0; i < canvSize; i++){

    for (j=0; j<canvSize; j++){

        noStroke();
        fill(i);
        ellipse(i*50, j* 50, 20);

        noStroke();
        fill(i*20);
        ellipse(i*30, j* 50, 20);
    }

  }

  noLoop();

}
