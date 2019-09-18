

function setup() {
  createCanvas(600, 600);

  fill(0);
  // translate(width/2, height/2);
  // beginShape();
  // for(var i = 0; i < 10; i++) {
  //   var x = cos(radians(i * 36)) * 100;
  //   var y = sin(radians(i * 36)) * 100;
  //   vertex(x, y);
  // }
  // endShape();


  var numVertices = 7; // or 4 or 30
  var spacing = 360 / numVertices;
  translate(width/2, height/2);
  beginShape();
  for(var i = 0; i < 10; i++) {
    var x = cos(radians(i * spacing)) * 100;
    var y = sin(radians(i * spacing)) * 100;
    vertex(x, y);
  }
  endShape();



}
