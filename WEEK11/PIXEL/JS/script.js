let canvSize = 500;
let img;

function preload(){
  imgReagan = loadImage('ASSETS/photo.jpg');
}

function setup() {
  createCanvas(canvSize, canvSize);

}

 // imgFilters = [THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, DILATE];

// 198 × 320
let imgW = 198;
let imgH = 320;
let step = 5;

function draw(){
  background(200);

  translate(-imgW/2, -imgH/2);
  image(imgReagan, width/2, height/2);

  filter(POSTERIZE, step);
  // noLoop();
}
