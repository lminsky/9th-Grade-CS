var x;
var y;
var diameter = 100;
var xSpeed = 5;
var ySpeed = 7;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/4;
  y = height/2;
}

function draw() {
  background(255, 0, 255);
  fill(random(128), random(128), random(128));
  ellipse(x, y, diameter, diameter);
  x = x + xSpeed;
  y = y + ySpeed;

  // This code makes the ball bounce off the bottom
  if(y > height - diameter/2) {
    ySpeed = ySpeed * -1;
  }

  if(y <= diameter/2) {
    ySpeed = ySpeed * -1;
  }

  if(x > width - diameter/2) {
    xSpeed = xSpeed * -1;
  }

  if(x <= diameter/2) {
    xSpeed = xSpeed * -1;
  }
}