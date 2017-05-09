var x;
var y;
var d;
var speedX;
var speedY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0, 255, 255);

  d = 100;
  x = random(d, width-d);
  y = random(d, height-d);
  speedX = random(5, 15);
  speedY = random(5, 15);

}

function draw() {
  background(0, 255, 255);
  ellipse(x, y, d, d);
  x = x + speedX;
  y = y + speedY;
  //d = d + 1;

  if(y > height - d/2) {
    speedY = -1 * abs(speedY);
    fill(random(255), random(255), random(255))
  }

  if(y < d/2) {
    speedY = abs(speedY);
  }

  if(x > width - d/2) {
    speedX = -1 * abs(speedX);
  }

  if(x < d/2) {
    speedX = abs(speedX);
  }
}