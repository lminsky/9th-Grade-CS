function setup() {
  createCanvas(600, 600);
  background(255, 255, 0);

  strokeWeight(10);

  fill(255, 0, 0);
  ellipse(200, 300, 50, 100);

  fill(255, 0, 255);
  noStroke();
  triangle(400, 500, 550, 300, 500, 500);

  noFill();
  stroke(0, 255, 0);
  rect(0, 0, 100, 200);
}

function draw() {
  
}