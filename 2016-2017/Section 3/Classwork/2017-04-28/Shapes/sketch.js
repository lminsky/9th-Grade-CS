function setup() {
  createCanvas(800, 800);
  background(200);

  stroke(255, 0, 0);
  fill(255, 255, 0);

  //These are rectangles
  rect(300, 500, 80, 120);

  stroke(0, 0, 255);
  fill(0, 255, 255);
  rect(300, 500, -80, -120);

  //This is an ellipse
  stroke(0, 255, 0);
  fill(255, 0, 255);
  ellipse(400, 400, 100, 200);

  //This is a triangle
  noFill();
  triangle(500, 200, 700, 300, 500, 700);
}  
