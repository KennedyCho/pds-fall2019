


function setup() {

  createCanvas(600, 600);
  background(0);

  let goldenRatio = 1.61803398875;
  let w = width;
  // width = a + b
  // (a+b)/GR = a
  // (a+b) - a = b

  // console.log(a);
  // console.log(b);
  // console.log(a+b);
  var a = width/goldenRatio;
  var b = width - a;

  for (i=0; i<5; i++){


    stroke(255);
    strokeWeight(5);
    line(a, 0, a, height);
    line(0, b, width, b);
    var b = a;
    var a = a/goldenRatio;
    var b = b - a;



  }
}
