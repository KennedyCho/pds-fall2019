// // EXAMPLE 01
//
// var circles = [];
//
// function setup() {
//   createCanvas(800, 600);
//
//   // create a bunch of JS objects
//   for(var i = 0; i < 10; i++) {
//     var x = random(width);
//     var y = random(height);
//     var r = round(random(10, 40));
//     circles.push({
//     	x: x,
//       y: y,
//       r: r
//     });
//   }
// }
//
// function draw() {
//
//   background(30);
//   noStroke();
//   fill(255);
//
//   // loop through all the circles
//   for(var i = 0; i < circles.length; i++) {
//
//     // draw each circle
//     ellipse(circles[i].x, circles[i].y, circles[i].r);
//
//     // move each circle
//     circles[i].x += 1;
//
//     // if the circle is outside the screen, reset back to beginning
//     if(circles[i].x > width) {
//       circles[i].x = -circles[i].r;
//       circles[i].y = random(height);
//     }
//   }
//
// }
//
// // EXAMPLE 02 DELETING SHAPES
// var circles = [];
//
// function setup() {
//   createCanvas(800, 600);
//   noStroke();
// }
//
// function draw() {
//
//   background(30);
//
//   console.log('Number of circles: ', circles.length);
//
//   // create a new circle every 40 frames
//   if(frameCount % 40 == 0) {
//
//     circles.push({
//       x: width/2,
//       y: height/2,
//       r: 1,
//       fill: random(30, 200)
//     });
//
//   }
//
//   for(var i = 0; i < circles.length; i++) {
//
//     // draw all circles
//     fill(circles[i].fill);
//     ellipse(circles[i].x, circles[i].y, circles[i].r);
//
//     // Make every circle bigger
//     circles[i].r += 1;
//   }
//
//   // iterate backwards through array and remove any circles
//   // bigger than the screen.
//   for(var i = circles.length-1; i >= 0; i--) {
//
//     if(circles[i].r > width) {
//
//       // remove from array
//       circles.splice(i, 1);
//     }
//   }
//
// };
//
// // EXAMPLE 03
// var circle;
//
// function setup() {
//
//   createCanvas(800, 600);
//
//   circle = {
//     x: width/2,
//     y: -50,
//     r: 50
//   }
//
//   TweenLite.to(circle, 2, { y:height/2 });
// }
//
// function draw() {
//   background(30);
//   fill(255);
//   ellipse(circle.x, circle.y, circle.r);
// }
//
// // make it go wherever you press the mouse
// function mousePressed() {
//   TweenLite.to(circle, 2, { x: mouseX, y:mouseY });
// }
//
// // EXAMPLE 04
// var circle;
//
// function setup() {
//
//   createCanvas(800, 600);
//
//   circle = {
//     x: width/2,
//     y: -50,
//     r: 50
//   }
//
//   // animate it to the middle of the screen
//   TweenLite.to(circle, 2, {
//     y:height/2,
//     r:200,
//     delay:1,
//     ease: Elastic.easeOut,
//     onComplete:finished
//   });
// }
//
// function draw() {
//   background(30);
//   fill(255);
//   ellipse(circle.x, circle.y, circle.r);
// }
//
// function finished() {
//   console.log("animation finished")
// }
//
// // EXAMPLE 05
//
// var circle;
// var tl;
//
// function setup() {
//
//   createCanvas(800, 600);
//
//   circle = {
//     x: width/2,
//     y: -50,
//     w: 30,
//     h: 30,
//     rotation: 0
//   }
//
//   tl = new TimelineLite({ onComplete: finished });
// 	tl.add( TweenLite.to(circle, 2, { y:height/2, ease: Elastic.easeOut }) );
// 	tl.add( TweenLite.to(circle, 2, { h:300, w: 200, ease: SteppedEase.config(5) }) );
// 	tl.add( TweenLite.to(circle, 1, { rotation:360, ease: Sine.easeInOut }) );
//
//   // The timeline has controls too
//   // tl.pause();
//   // tl.resume();
//   // tl.seek(1.5);
//   // tl.reverse();
// }
//
// function draw() {
//   background(30);
//   fill(255);
//   translate(circle.x, circle.y);
//   rotate(radians(circle.rotation));
//   ellipse(0, 0, circle.w, circle.h);
// }
//
// function finished() {
//   console.log("Reversing timeline")
//   tl.reverse();
// }
//
// // EXAMPLE 06
// let x = 320;
// let y = 180;
// let xspeed = 5;
// let yspeed = 2;
//
// let r = 25;
//
// function setup() {
//   createCanvas(640, 360);
// }
//
// function draw() {
//   background(0);
//   ellipse(x, y, r*2, r*2);
//   x += xspeed;
//   y += yspeed;
//   if (x > width - r || x < r) {
//     xspeed = -xspeed;
//   }
//   if (y > height - r || y < r) {
//     yspeed = -yspeed;
//   }
//
//
// }
//
//
