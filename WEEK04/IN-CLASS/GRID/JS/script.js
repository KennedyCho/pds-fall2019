function setup() {
  createCanvas(400, 400);
  background(170);

  //create a dictionary
  let kennedy = {
   locationX: 230,
   locationY:120,
   height:60,
   width:60

  }

  noStroke();
  fill(255,20,123);
  rect(kennedy.locationX,kennedy.locationY,kennedy.width,kennedy.height);

}
