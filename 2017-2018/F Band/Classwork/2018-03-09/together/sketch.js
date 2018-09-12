function setup() {
  createCanvas(windowWidth, windowHeight);
  for(var j = 50; j < height; j = j + 100) {
    for(var i = 50; i < width; i = i + 100) {
      ellipse(i, j, 50);
    }
  }
}