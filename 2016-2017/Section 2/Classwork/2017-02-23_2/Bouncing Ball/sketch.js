var x;
var y;
var diameter = 100;
var xSpeed = 1;
var ySpeed = 2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background(255, 0, 255);
  ellipse(x, y, diameter, diameter);
  x = x + xSpeed;
  y = y + ySpeed;

  if(y > height - diameter/2) {
    ySpeed = ySpeed * -1;
  }
}