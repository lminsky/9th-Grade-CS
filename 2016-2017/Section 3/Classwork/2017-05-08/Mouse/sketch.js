var paddleX;
var paddleY;
var paddleH;
var paddleW;


function setup() {
  createCanvas(windowWidth, windowHeight);
  paddleH = 150;
  paddleW = 20;
  paddleX = 10;
}

function draw() {
  background(255, 255, 255);

  if(mouseY < paddleH/2) {
    y = 0;
  } else if(mouseY > height - paddleH/2) {
    paddleY = height - paddleH;
  } else {
    paddleY = mouseY - paddleH/2;
  }

  rect(paddleX, paddleY, paddleW, paddleH);
}