var x = 0;
var y = 00;
var w;
var h = 10;
var yDist = 5;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0, 0, 0);
  w = width;
}

function draw() {
  background(255, 255, 255);
  rect(x, y, w, h);
  y = (y + yDist)%height;
}