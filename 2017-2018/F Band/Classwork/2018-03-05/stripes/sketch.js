function setup() {
  createCanvas(windowWidth, windowHeight);
  var dist = 10;
  for(var i = 0; i < width; i++) {
    line(i * dist, 0, i * dist, height);
  }
}
