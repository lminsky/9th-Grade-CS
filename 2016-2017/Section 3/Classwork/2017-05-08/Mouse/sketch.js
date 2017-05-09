var y;
var h;

function setup() {
  createCanvas(windowWidth, windowHeight);
  h = 150
}

function draw() {
  background(0, 255, 255);
  console.log(mouseX + ", " + mouseY);
  fill(0, 0, 0);
  if(mouseY < h/2) {
    y = 0;
  } else if(mouseY > height - h/2) {
    y = height - h;
  } else {
    y = mouseY - 75;
  }
  rect(10, y, 20, h);
}