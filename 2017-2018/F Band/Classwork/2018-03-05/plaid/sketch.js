var s = 50;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 0, 0);

  fill(0, 0, 0, 200);
  noStroke();
  for(var i = 0; i < 50; i++) {
    rect(s + i * 2 * s, 0, s, height);
    rect(0, s + i * 2 * s, width, s);
  }
}
