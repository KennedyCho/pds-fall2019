

function setup() {

  // lesser than sign
  createCanvas(500, 500);
    background(240);

    var w = width * 0.35;
    var h = width * 0.5;

    // causes the shape to be cut along the borders of Shape
    // without causes the inner shevron to be filled a white
    noFill();
    // darker < 40 < lighter
    // 0 = black, 255 = white
    stroke(0);
    // Sets the style for rendering line endings
    // SQUARE, PROJECT, and ROUND. The default cap is ROUND
    strokeCap(SQUARE);
    // makes the shape grow or shrink according to canvas width
    strokeWeight(width * 0.08);
    // start drawing at different point
    translate((width/2 - (w/2)) , (height/2 - (h/2)) );
    //
    beginShape();
    vertex(0, 0);
    vertex(w, h/2);
    vertex(0, h);
    endShape();

// I don't understand why the noLoop() is used
    noLoop();



}
