// // EXERCISE 01
// function setup() {
//
// 	createCanvas(800, 800);
//
//
// 	// Find random points for the gray line
// 	// -------------------------------------
//
// 	var linePoints = [];
// 	var x = -300;
// 	var y = 0;
//
//   while(x < 1000) {
//
//     // increment x with a random amount
//     x += random(60, 150);
//
//     // use noise to find a y value from 500 to 600.
//     y = 500 + (noise(x / 150) * 100);
//
//     // push this point into the array
//     linePoints.push(createVector(x, y));
//   }
//
//   // Draw shapes based on those points
//   // -------------------------------------
//
//   // loop through each point but the last one
//   for(var i = 0; i < linePoints.length - 1; i++)
//   {
//     // first find a random height for this rectangle
//     var ranHeight = random(150, 350);
//
//     // then find all the points we need for this rectangle
//     var bottomLeft  = linePoints[i];
//     var bottomRight = linePoints[i + 1];
//
//     // and calculcate the top points from this
//     var topLeft = bottomLeft.copy().sub(createVector(0, ranHeight));
//     var topRight = bottomRight.copy().sub(createVector(0, ranHeight));
//
//     // now draw the triangles
//     noStroke();
//     fill(0, 0, 0, 70);
//     triangle(bottomLeft.x, bottomLeft.y, topLeft.x, topLeft.y, topRight.x, topRight.y);
//
// 		fill(0, 0, 0, 120);
//     triangle(topLeft.x, topLeft.y, topRight.x, topRight.y, bottomRight.x, bottomRight.y);
//
//     // aaaand the line
//     stroke(0, 0, 0, 50);
//     strokeWeight(2);
//     line(bottomLeft.x, bottomLeft.y, bottomRight.x, bottomRight.y);
//   }
//
// }

// // EXERCISE 02
// function setup() {
//
// 	createCanvas(800, 800);
//
//
// 	// Find random points for the gray line
// 	// -------------------------------------
//
// 	var linePoints = [];
//   var lineDirections = [];
// 	var x = -300;
// 	var y = 0;
//
//   while(x < 1000) {
//
//     // increment x with a random amount
//     x += random(60, 150);
//
//     // use noise to find a y value from 500 to 600.
//     y = 500 + (noise(x / 150) * 100);
//
//     // push this point into the array
//     linePoints.push(createVector(x, y));
//
//     // push the direction into the array
//     lineDirections.push(createVector(random(-0.15, 0.15), -1));
//   }
//
//   // Draw shapes based on those points
//   // -------------------------------------
//
//   // loop through each point but the last one
//   for(var i = 0; i < linePoints.length - 1; i++)
//   {
//     // first find a random height for this rectangle
//     var ranHeight = random(150, 350);
//
//     // then find all the points we need for this rectangle
//     var bottomLeft = linePoints[i];
//     var leftDirection = lineDirections[i];
//     var bottomRight = linePoints[i + 1];
//     var rightDirection = lineDirections[i + 1];
//
//     // and calculcate the top points from this
//     var topLeft = leftDirection.copy().mult(ranHeight).add(bottomLeft);
//     var topRight = rightDirection.copy().mult(ranHeight).add(bottomRight);
//
//     // now draw the triangles
//     noStroke();
//     fill(0, 0, 0, 70);
//     triangle(bottomLeft.x, bottomLeft.y, topLeft.x, topLeft.y, topRight.x, topRight.y);
//
// 		fill(0, 0, 0, 120);
//     triangle(topLeft.x, topLeft.y, topRight.x, topRight.y, bottomRight.x, bottomRight.y);
//
//     // aaaand the line
//     stroke(0, 0, 0, 50);
//     strokeWeight(2);
//     line(bottomLeft.x, bottomLeft.y, bottomRight.x, bottomRight.y);
//   }
//
// }

// EXERCISE 03
function setup() {

	createCanvas(800, 800);
  colorMode(HSB);

  var colors = [
    [ color(0, 100, 30), color(0, 92, 61), color(0, 96, 85) ],  // reds
    [ color(86, 84, 20), color(86, 79, 38), color(86, 61, 64) ], // greens
    [ color(205, 28, 48), color(205, 18, 59), color(205, 13, 82) ], // blues
    [ color(43, 94, 59), color(43, 91, 89), color(43, 83, 99) ], // yellows
	];

	// Find random points for the gray line
	// -------------------------------------

	var linePoints = [];
  var lineDirections = [];
	var x = -300;
	var y = 0;

  while(x < 1000) {

    // increment x with a random amount
    x += random(60, 150);

    // use noise to find a y value from 500 to 600.
    y = 500 + (noise(x / 150) * 100);

    // push this point into the array
    linePoints.push(createVector(x, y));

    // push the direction into the array
    lineDirections.push(createVector(random(-0.15, 0.15), -1));
  }

  // Draw shapes based on those points
  // -------------------------------------

  // loop through each point but the last one
  for(var i = 0; i < linePoints.length - 1; i++)
  {
    // first find a random height for this rectangle
    var ranHeight = random(150, 350);

    // then find all the points we need for this rectangle
    var bottomLeft = linePoints[i];
    var leftDirection = lineDirections[i];
    var bottomRight = linePoints[i + 1];
    var rightDirection = lineDirections[i + 1];

    // and calculcate the top points from this
    var topLeft = leftDirection.copy().mult(ranHeight).add(bottomLeft);
    var topRight = rightDirection.copy().mult(ranHeight).add(bottomRight);

    // Find middle point
    var midPoint = p5.Vector.lerp(bottomLeft, topRight, 0.5);

    var colorArray = random(colors);

    // now draw the triangles
    noStroke();
    fill(colorArray[0]);
    triangle(bottomLeft.x, bottomLeft.y, topLeft.x, topLeft.y, midPoint.x, midPoint.y);

    fill(colorArray[1]);
    triangle(topLeft.x, topLeft.y, midPoint.x, midPoint.y, topRight.x, topRight.y);

		fill(colorArray[2]);
    triangle(topRight.x, topRight.y, bottomRight.x, bottomRight.y, midPoint.x, midPoint.y);

    // aaaand the line
    stroke(0, 0, 0, 50);
    strokeWeight(2);
    line(bottomLeft.x, bottomLeft.y, bottomRight.x, bottomRight.y);
  }

}
