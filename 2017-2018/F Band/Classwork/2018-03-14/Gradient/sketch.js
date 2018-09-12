function setup() {
  createCanvas(windowWidth, windowHeight);

  var x = 0;
  while(x < width) {
    stroke(x);
    line(x, 0, x, height);
    x = x + 1;
  }
}