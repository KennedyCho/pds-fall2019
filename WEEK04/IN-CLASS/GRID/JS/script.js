
let kenKen = [];

function setup() {
createCanvas(400, 400);
//background(170);

//   //create a dictionary
//   let kennedy = {
//    locationX: 230,
//    locationY:120,
//    height:60,
//    width:60
//   }


// noStroke();
// fill(255,20,123);
// rect(kennedy.locationX,kennedy.locationY,kennedy.width,kennedy.height);


// ken = new cfamily();
// ken1 = new cfamily()

// for(let i = 0;i<10;i++){
//  kenKen.push(new kfamily());
//  }

//  for(let i = 0;i<10;i++){
//   kenKen.push(new kfamily(255,255,255));
// };

}

function draw() {
background(30);
// // ken.move();
// ken.display();
// // ken1.move();
// ken1.display();



for(let i = 0;i<kenKen.length;i++){
  kenKen[i].move();
  kenKen[i].display();
}

}

function mousePressed(){
//whenever I added the new ball
var b = new kfamily(random(255),random(255),random(255));
kenKen.push(b);
}

// Jitter class
class kfamily {
constructor(tColorR,tColorG,tColorB) {
//     this.x is to have the code not confuse a global x with this x
  this.x = random(width);
  this.y = random(height);
  this.width = random(30, 80);
  this.height=random(150,200);
  this.speed = 1;
  this.colorR = tColorR;
  this.colorG = tColorG;
  this.colorB = tColorB;
}

move() {
  this.x += random(-this.speed, this.speed);
  this.y += random(-this.speed, this.speed);
}

display() {
  noStroke();
  //stroke(255,166,23);
  // fill(255,206,123);
  fill(this.colorR,this.colorG,this.colorB);
  rect(this.x, this.y, this.width, this.height);
}
}
