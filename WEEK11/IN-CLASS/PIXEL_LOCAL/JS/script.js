// PIXEL LOCAL SERVER EXAMPLE

// https://github.com/processing/p5.js/wiki/Local-server

let img;
function preload() {
  img = loadImage("ASSETS/photo.jpg");
}

function setup() {
  createCanvas(1000, 1000);
	pixelDensity(1);
  image(img, 0, 0);

  loadPixels();
  for(var x = 0; x < width; x++) {
    for(var y = 0; y < height; y++) {

      let index = (x + (y * width)) * 4;

      // Simple red filter
      // pixels[index] = 255;

      // Advanced black and white filter
      // let r = pixels[index];
      // let g = pixels[index+1];
      // let b = pixels[index+2];
      // var hsl = hsluv.rgbToHsluv([r / 255, g / 255, b / 255]);
      //
      // hsl[1] = 0;
      //
      // let rgb = hsluv.hsluvToRgb(hsl);
      // pixels[index] = rgb[0] * 255;
      // pixels[index+1] = rgb[1] * 255;
      // pixels[index+2] = rgb[2] * 255;
    }
  }
  updatePixels();

}
