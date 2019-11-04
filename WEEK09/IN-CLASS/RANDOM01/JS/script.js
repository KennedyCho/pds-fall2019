
// // EXAMPLE 01: CHANCE
// function setup() {
//
//
//   createCanvas(400, 400);
//   background(155,155,155);
//
//   // evaluates if the random num generated fits comparison
//   // 4 states are available: circle, sqaure, none, both
//   // variable holds boolean value
//   let square = random(1) > 0.5;
//   let circle = random(1) < 0.5;
//
//   // evaluates true if variable holds True
//   if(square){
//     noStroke();
//     fill(255,0,0);
//     rectMode(CENTER);
//     rect(width/2,height/2,200,200);
//
//      }
//
//   if(circle){
//     noStroke();
//     fill(0,255,0);
//     ellipse(width/2,height/2,200,200);
//   }
// }

// // EXAMPLE 02: WEIGHTED RANDOMNESS
// function setup() {
//   createCanvas(400, 400);
//   background(30);
//
//   // call function to find random color based on weight.
//   var col = chooseWeighted([
//     { value: color(255, 0, 0), weight: 4 },
//     { value: color(0, 255, 0), weight: 2 },
//     { value: color(0, 0, 255), weight: 1 }
//   ]);
//
//   fill(col);
//   rect(100, 100, 200, 200);
//
//
// }
//
// // Define function used to find weights.
// function chooseWeighted(opts) {
//
//   // get sum of all the weights.
//   var sum = 0;
//   for(var i = 0; i < opts.length; i++) {
//    sum += opts[i].weight
//   }
//
//   // now pick a random number between 0 and the sum of the weights
//   var randomNum = random(sum);
//
//   // loop through all the options until you find a weight that is greater
//   // or equal to the random number. Subtract weight from random num every time.
//   for( var i = 0; i < opts.length; i++){
//
//     var opt = opts[i];
//
//     if(opt.weight >= randomNum) {
//       return opt.value;
//     }
//
//     randomNum -= opt.weight;
//   }
// }

// // EXAMPLE 03: SEED RANDOM
// function setup() {
//   createCanvas(400, 400);
//   background(30);
//   fill(255, 0, 0);
//   noStroke();
//   // Draw five random ellipses
//   for(var i = 0; i < 5; i++) {
//      let x = random(width);
//      let y = random(height);
//   	 ellipse(x, y, 40, 40);
//       print(x,y);
//   }
// }

// // EXAMPLE 04: PERLIN NOISE
// function setup() {
//
//   createCanvas(600, 600);
//   background(30);
//   noFill();
//
//   // random()
//   // -------------------------------------------------------
//
//   stroke(255);
//   strokeWeight(2);
//   translate(0, 100);
//   beginShape();
//   for(let x = 0; x < width; x += 15) {
//     vertex(x, random(100));
//   }
//   endShape();
//
//   // noise()
//   // -------------------------------------------------------
//
//   noiseStep = 0;
//
//   // To make the noise look the same on each run
//   // noiseSeed(1);
//
//   // To control the curves of the noise
//   // noiseDetail(1)
//
//   translate(0, 200);
//   beginShape();
//   for(let x = 0; x < width; x += 15) {
//     noiseStep += 0.05;
//     let y = map(noise(noiseStep),0,1,0,200);
//     vertex(x, y);
//
//   }
//   endShape();
//
// }


// // EXAMPLE 05: PERLIN NOISE ANIMATED ICEBERG
// function setup() {
//
//   createCanvas(600, 600);
//   background(30);
//
//   noiseDetail(4, 0.75);
//   noiseSeed(3);
//
//   var noiseStep = 0;
//
//   translate(width/2, 100);
//   beginShape();
//
//   for(var degree = 0; degree <= 180; degree += 3) {
//
//     var x = Math.cos(radians(degree)) * 200;
//     var y = Math.sin(radians(degree)) * 200;
//
//     if(degree > 10 && degree < 170) {
//       y += noise(noiseStep) * 150;
//     }
//
//     vertex(x, y);
//
//     noiseStep += 0.04;
//   }
//
//   endShape();
// }


// EXAMPLE 06: RECREATE DAMIEN HIRST

function setup() {
  //noprotect
  createCanvas(400, 400);
	stroke(255);
	fill(30);

	for(var i = 0; i < width; i++) {
		for(var j = 0; j < height; j++) {
			var n = noise(i / 8, j / 3);
			var gray = map(n, 0, 1, 0, 255);
      var size = map(n, 0, 1, 10, 30);
      fill(random(255),random(255),random(255),random(200));
			ellipse(i * 30, j * 30, size, size);
		}
	}

}
