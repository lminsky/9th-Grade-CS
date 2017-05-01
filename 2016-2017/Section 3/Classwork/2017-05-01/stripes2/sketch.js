var x;
var y;
var w;
var h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 0);

  x = 0;
  y = 0;
  w = width;
  h = 15;

  fill(0, 0, 0);
  noStroke();

}

function draw() {
  background(255, 255, 0);
  console.log(y + " - " + height);
  rect(x, y, w, h);
  y = y + 10;
  y = y % height;
}








