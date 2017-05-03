var x;
var y;
var d;
var speedX;
var speedY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 255, 255);

  x = 700;
  y = 200;
  d = 100;
  speedX = 1;
  speedY = 4;
}

function draw() {
  background(0, 255, 255);
  ellipse(x, y, d, d);
  x = x + speedX;
  y = y + speedY;
  //d = d + 1;

  if(y > height - d/2) {
    speedY = -1 * speedY;
  }
}