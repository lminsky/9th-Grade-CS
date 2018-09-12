function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255, 255, 0);

  // for(var i = 10; i < width; i = i + 10) {
  //   line(i, 0, i, height);
  // }

  for(var i = 0; i < 100; i = i + 1) {
    line(10 + i * 10, 0, 10 + i * 10, height);
  }
}
