function setup() {
  createCanvas(windowWidth, windowHeight);
  var dist = 100;
  for(var i = 0; i < width; i++) {
    for(var j = 0; j < height; j++) {
      ellipse(dist/2 + i * dist, dist/2 + j * dist, dist/2);
    }
  }
}
