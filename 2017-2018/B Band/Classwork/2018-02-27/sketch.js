function setup() {
  createCanvas(800, 600);
  background(255, 0, 255);

  for(var i = 0; i < 10; i = i + 1) {
    rect(50 + i * 50, 250, 20, 20);
  }

  rect(50, 50, 20, 20);
  rect(100, 50, 20, 20);
  rect(150, 50, 20, 20);
  rect(200, 50, 20, 20);
  rect(250, 50, 20, 20);
  rect(300, 50, 20, 20);
  rect(350, 50, 20, 20);
  rect(400, 50, 20, 20);
  rect(450, 50, 20, 20);
}