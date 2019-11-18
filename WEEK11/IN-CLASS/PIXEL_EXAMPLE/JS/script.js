// EXAMPLE 01

function setup() {
  createCanvas(400, 400);
  pixelDensity(1);
  background(30);

  // Draw a single red pixel
  noStroke();
  fill(255, 0, 0);
  rect(180, 200, 10, 10);

  // Find the color of the pixel in the pixels array
  loadPixels();
	//            x  +   y  * width   * Vals per color
  var index = (180 + (200 * width)) * 4;
  var r = pixels[index + 0];
  var g = pixels[index + 1];
  var b = pixels[index + 2];
  print(r);
  print(g);
  print(b);
}

// EXAMPLE 02

// function setup() { 
//   createCanvas(255, 255);
//   pixelDensity(1);
//   background(30);
//
//   loadPixels();
//
//   for(var x = 0; x < width; x++) {
//   	for(var y = 0; y < height; y++) {
//
//   		var index = (x + (y * width)) * 4;
//       pixels[index + 0] = x;
//   		pixels[index + 1] = y;
//   		pixels[index + 2] = 0;
//
//     }
//   }
//
//   updatePixels();
// }
